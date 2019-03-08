import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import axios from 'axios';
import { connect } from 'react-redux';
import { bbox, bboxPolygon, featureCollection } from '@turf/turf';

import Header from '../components/Header';
import Layers from '../components/Layers';
import Map from '../components/Map';
import TMSLayers from '../components/TmsLayers';
import FeatureDetails from '../components/FeatureDetails';
import Footer from '../components/Footer';

import { layers, tmsLayers } from '../config';
import { setLayers } from '../actions/LayersActions';
import { setTMSLayers } from '../actions/TmsLayersActions';
import { ZoomToLayer } from '../actions/LayerActions';
import Features from '../components/Features';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSidebarCollased: false
    };
    // this.toggleSidebar = this.toggleSidebar.bind(this);
  }

  componentWillMount() {
    /**
     * Load the vector files
     */
    const self = this;
    let globalBbox = featureCollection([]);

    const layersGeojson = layers.filter(layer => {
      return layer.type == 'geojson';
    });

    axios.all(layersGeojson.map(layer => axios.get(layer.url))).then(
      axios.spread(function(...response) {
        for (let i = 0; i < response.length; i++) {
          layersGeojson[i].data = response[i].data;
          layersGeojson[i].active = false;
          layersGeojson[i].bbox = bbox(response[i].data);
          globalBbox.features.push(bboxPolygon(layersGeojson[i].bbox));
        }

        /**
         * Merge geojson and vector layers in one array */

        for (let j = 0; j < layers.length; j++) {
          const layer = layers[j];
          layers[j].active = false;
          for (let d = 0; d < layersGeojson.length; d++) {
            const layerGeojson = layersGeojson[d];
            if (layer.id === layerGeojson.id) {
              layers[j] = layerGeojson;
            }
          }
        }

        self.props.setLayers(layers);
        self.props.ZoomToLayer(bbox(globalBbox));
      })
    );

    /**
     * Load the TMS layers
     */
    this.props.setTMSLayers(tmsLayers);
  }

  // toggleSidebar() {
  //   this.setState({
  //     isSidebarCollased: !this.state.isSidebarCollased
  //   });
  // }

  render() {
    const classes = classNames({
      container: true,
      'sidebar-collased': this.state.isSidebarCollased
    });

    // const layers = this.props.layers;
    return (
      <div>
        <div className={classes}>
          {/* sidebar-collased */}
          <Header />
          <Layers />
          <Map />
          <Footer />
        </div>
        <TMSLayers />
        <Features />
        <FeatureDetails />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  setLayers: PropTypes.func,
  setTMSLayers: PropTypes.func,
  ZoomToLayer: PropTypes.func
});

const mapDispatchToProps = {
  setLayers,
  setTMSLayers,
  ZoomToLayer
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
