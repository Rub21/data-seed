import React, { Component } from 'react';
import classNames from 'classnames';
import axios from 'axios';
import { connect } from 'react-redux';
import bbox from '@turf/bbox';

import Header from '../components/Header';
import Layers from '../components/Layers';
import Map from '../components/Map';
import TMSLayers from '../components/TmsLayers';
import { layers, tmsLayers } from '../config';
import { setLayers } from '../actions/LayersActions';
import { setTMSLayers } from '../actions/TmsLayersActions';

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
    axios.all(layers.map(layer => axios.get(layer.url))).then(
      axios.spread(function(...response) {
        for (let i = 0; i < response.length; i++) {
          layers[i].data = response[i].data;
          layers[i].bbox = bbox(response[i].data);
        }
        self.props.setLayers(layers);
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
          <footer />
        </div>
        <TMSLayers />
      </div>
    );
  }
}

// const mapStateToProps = state => ({
//   layers: state.layers
// });

const mapDispatchToProps = {
  setLayers,
  setTMSLayers
};

export default connect(
  null,
  mapDispatchToProps
)(Home);
