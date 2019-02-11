import React, { Component } from 'react';
import classNames from 'classnames';
import axios from 'axios';
import { connect } from 'react-redux';
import bbox from '@turf/bbox';

import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Map from '../components/Map';
import { vectorLayers } from '../config';

import { setVectorLayers } from '../actions/VectorLayersActions';

class Home extends Component {
  constructor (props) {
    super(props);
    this.state = {
      isSidebarCollased: false
    };
    this.toggleSidebar = this.toggleSidebar.bind(this);
  }

  componentWillMount () {
    /**
     * Load the vector files
     */
    const self = this;
    axios.all(vectorLayers.map(layer => axios.get(layer.url)))
      .then(axios.spread(function (...response) {
        for (let i = 0; i < response.length; i++) {
          vectorLayers[i].data = response[i].data;
          vectorLayers[i].bbox = bbox(response[i].data);
        }
        self.props.setVectorLayers({ vectorLayers });
      }));
  }

  toggleSidebar () {
    this.setState({
      isSidebarCollased: !this.state.isSidebarCollased
    });
  }

  render () {
    const classes = classNames({
      'container': true,
      'sidebar-collased': this.state.isSidebarCollased
    });

    return (
      <div className={classes}>
        {/* sidebar-collased */}
        <Header toggleSidebar={this.toggleSidebar} />
        <Sidebar vectorLayers={vectorLayers} />
        <Map isSidebarCollased={this.state.isSidebarCollased} vectorLayers={vectorLayers}></Map>
        <footer>
        </footer>
      </div>

    );
  }
}

const mapStateToProps = state => ({
  vectorLayers: state.vectorLayers
});

const mapDispatchToProps = {
  setVectorLayers
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
