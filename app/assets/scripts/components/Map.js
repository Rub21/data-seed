import React from 'react';
import mapboxgl from 'mapbox-gl';
import { connect } from 'react-redux';
import { bbox, centroid, featureCollection } from '@turf/turf';

import { mbtoken, mbstyle, environment } from '../config';
// import { displayLayers, displayTMSLayers } from './Map.layers';

import {
  polygonStyle,
  lineStyle,
  pointStyle,
  tmsStyle,
  highlightStyleLine,
  highlightStylePoint
} from './../utils/mapStyles';
import { SetActiveFeature } from '../actions/FeatureActions';

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
    setTimeout(function() {
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
      const tmsLayers = this.props.tmsLayers;

      for (let j = 0; j < tmsLayers.length; j++) {
        const tmsLayer = tmsLayers[j];
        if (!this.map.getLayer(tmsLayer.id)) {
          this.map.addLayer(tmsStyle(tmsLayer));
          this.map.setLayoutProperty(tmsLayer.id, 'visibility', tmsLayer.showLayer ? 'visible' : 'none');
        }
      }

      /**
       * Set vector Layers on the map
       */

      const layers = this.props.layers;

      for (let i = 0; i < layers.length; i++) {
        const layer = layers[i];
        if (!this.map.getSource(layer.id)) {
          this.map.addSource(layer.id, {
            type: 'geojson',
            data: layer.data
          });
          if (layer.display === 'polygon') {
            this.map.addLayer(polygonStyle(layer));
          } else if (layer.display === 'point') {
            this.map.addLayer(pointStyle(layer));
          } else if (layer.display === 'line') {
            this.map.addLayer(lineStyle(layer));
          }
          const self = this;
          this.map.on('mousemove', layer.id, function(e) {
            self.map.getCanvas().style.cursor = e.features.length ? 'pointer' : '';
          });

          this.map.on('click', layer.id, function(e) {
            self.map.getCanvas().style.cursor = e.features.length ? 'pointer' : '';
            const feature = {
              type: 'Feature',
              geometry: self.map.queryRenderedFeatures(e.point)[0].geometry,
              properties: e.features[0].properties
            };
            self.props.SetActiveFeature(feature);
          });

          /**
           * Show or hide the Layer
           */

          this.map.setLayoutProperty(layer.id, 'visibility', layer.showLayer ? 'visible' : 'none');
        }
      }

      /**
       * Layer highlight layer
       */
      this.map.addSource('highlight-feature-line', {
        type: 'geojson',
        data: featureCollection([])
      });
      this.map.addSource('highlight-feature-point', {
        type: 'geojson',
        data: featureCollection([])
      });
      this.map.addLayer(highlightStyleLine);
      this.map.addLayer(highlightStylePoint);

      this.map.resize();
    });
  }

  componentWillReceiveProps(nextProps) {
    /**
     * Zoom to layer
     */
    if (nextProps.bbox && this.props.bbox && this.props.bbox[0] !== nextProps.bbox[0]) {
      this.map.fitBounds(nextProps.bbox);
    }
    if (nextProps.layers && nextProps.layers.length > 0) {
      const layers = nextProps.layers;
      for (let i = 0; i < layers.length; i++) {
        const layer = layers[i];
        if (this.map.getLayer(layer.id)) {
          this.map.setLayoutProperty(layer.id, 'visibility', layer.showLayer ? 'visible' : 'none');
        }
      }
    }

    if (nextProps.tmsLayers && nextProps.tmsLayers.length > 0) {
      for (let j = 0; j < nextProps.tmsLayers.length; j++) {
        const tmsLayer = nextProps.tmsLayers[j];
        if (this.map.getLayer(tmsLayer.id)) {
          this.map.setLayoutProperty(tmsLayer.id, 'visibility', tmsLayer.showLayer ? 'visible' : 'none');
        }
      }
    }

    if (nextProps.feature && nextProps.feature.geometry) {
      this.map.getSource('highlight-feature-line').setData(featureCollection([nextProps.feature]));
      this.map.getSource('highlight-feature-point').setData(featureCollection([nextProps.feature]));
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
    tmsLayers: state.tmsLayers,
    feature: state.feature
  };
}

const mapDispatchToProps = {
  SetActiveFeature
};

export default connect(
  mapStateToPops,
  mapDispatchToProps
)(Map);
