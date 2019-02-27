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

class Home extends Component {
  constructor (props) {
    super(props);
    this.state = {
      isSidebarCollased: false
    };
    // this.toggleSidebar = this.toggleSidebar.bind(this);
  }

  componentWillMount () {
    /**
     * Load the vector files
     */
    const self = this;
    let globalBbox = featureCollection([]);
    axios.all(layers.map(layer => axios.get(layer.url))).then(
      axios.spread(function (...response) {
        for (let i = 0; i < response.length; i++) {
          layers[i].data = response[i].data;
          layers[i].bbox = bbox(response[i].data);
          globalBbox.features.push(bboxPolygon(layers[i].bbox));
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

  render () {
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
