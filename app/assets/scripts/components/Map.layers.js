import mapboxgl from 'mapbox-gl';
import React from 'react';

export const displayLayers = (map, props) => {
  const layers = props.layers;
  for (let i = 0; i < layers.length; i++) {
    const layer = layers[i];
    if (!map.getSource(layer.id)) {
      map.addSource(layer.id, {
        type: 'geojson',
        data: layer.data
      });
      if (layer.display === 'polygon') {
        map.addLayer({
          id: layer.id,
          type: 'fill',
          source: layer.id,
          paint: {
            'fill-color': layer.color,
            'fill-outline-color': layer.color,
            'fill-opacity': 0.5
          }
        });
      } else if (layer.display === 'point') {
        map.addLayer({
          id: layer.id,
          type: 'circle',
          source: layer.id,
          paint: {
            // make circles larger as the user zooms from z12 to z22
            'circle-radius': {
              base: 1.75,
              stops: [[12, 2], [22, 180]]
            },
            'circle-color': layer.color
          }
        });
      } else if (layer.display === 'line') {
        map.addLayer({
          id: layer.id,
          type: 'line',
          source: layer.id,
          layout: {
            'line-join': 'round',
            'line-cap': 'round'
          },
          paint: {
            'line-color': layer.color,
            'line-width': 2
          }
        });
      }

      map.on('mousemove', layer.id, function(e) {
        map.getCanvas().style.cursor = e.features.length ? 'pointer' : '';
      });

      map.on('click', layer.id, function(e) {
        map.getCanvas().style.cursor = e.features.length ? 'pointer' : '';

        console.log('------------------------------------');
        console.log(e.features[0]);
        console.log('------------------------------------');
        // new mapboxgl.Popup()
        // .setLngLat(e.lngLat)
        // .setHTML(e.features[0].properties.name)
        // .addTo(map);
      });

      /**
       * Show or hide the Layer
       */

      map.setLayoutProperty(layer.id, 'visibility', layer.showLayer ? 'visible' : 'none');
    } else {
      map.setLayoutProperty(layer.id, 'visibility', layer.showLayer ? 'visible' : 'none');
    }
  }
};

export const displayTMSLayers = (map, props) => {
  const tmsLayers = props.tmsLayers;
  for (let j = 0; j < tmsLayers.length; j++) {
    const tmsLayer = tmsLayers[j];
    if (!map.getLayer(tmsLayer.id)) {
      map.addLayer({
        id: tmsLayer.id,
        type: 'raster',
        source: {
          type: 'raster',
          tiles: [tmsLayer.url],
          tileSize: 256
        },
        paint: {}
      });
      map.setLayoutProperty(tmsLayer.id, 'visibility', tmsLayer.showLayer ? 'visible' : 'none');
    } else {
      map.setLayoutProperty(tmsLayer.id, 'visibility', tmsLayer.showLayer ? 'visible' : 'none');
    }
  }
};
