import React from 'react';
import mapboxgl from 'mapbox-gl';
import { connect } from 'react-redux';

import { mbtoken, mbstyle, environment } from '../config';
import { displayLayers, displayTMSLayers } from './Map.layers';

mapboxgl.accessToken = mbtoken;

class Map extends React.Component {
  map;
  constructor(props) {
    super(props);
    this.state = {
      lng: 0,
      lat: 0,
      zoom: 2
    };
  }

  componentWillReceiveProps(nextProps) {
    /**
     * Extend the map in case hide the sidebar
     */
    const that = this;
    this.map.resize();
    setTimeout(function () {
      that.map.resize();
    }, 100);
  }

  componentDidMount() {
    const { lng, lat, zoom } = this.state;
    /**
     * Display map
     */
    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: mbstyle,
      center: [lng, lat],
      zoom
    });

    this.map.on('load', () => {
      /**
       * Set TMS Layers on the map
       */

      displayTMSLayers(this.map, this.props);
      /**
       * Set TMS Layers on the map
       */

      displayLayers(this.map, this.props);
      this.map.resize();
    });
  }

  componentWillReceiveProps(nextProps) {
    /**
     * Zoom to layer
     */
    if (nextProps.bbox) {
      this.map.fitBounds(nextProps.bbox);
    }

    if (nextProps.layers && nextProps.layers.length > 0) {
      const layers = nextProps.layers;
      for (let i = 0; i < layers.length; i++) {
        const layer = layers[i];
        if (this.map.getLayer(layer.id)) {
          this.map.setLayoutProperty(
            layer.id,
            'visibility',
            layer.showLayer ? 'visible' : 'none'
          );
        }
      }
    }

    if (nextProps.tmsLayers && nextProps.tmsLayers.length > 0) {
      for (let j = 0; j < nextProps.tmsLayers.length; j++) {
        const tmsLayer = nextProps.tmsLayers[j];
        if (this.map.getLayer(tmsLayer.id)) {
          this.map.setLayoutProperty(
            tmsLayer.id,
            'visibility',
            tmsLayer.showLayer ? 'visible' : 'none'
          );
        }
      }
    }
  }

  render() {
    return <main ref={el => (this.mapContainer = el)} className="mapContent" />;
  }
}

function mapStateToPops(state, ownProps) {
  return {
    layers: state.layers,
    bbox: state.bbox,
    tmsLayers: state.tmsLayers
  };
}

export default connect(mapStateToPops)(Map);
