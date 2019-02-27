export const polygonStyle = layer => {
  return {
    id: layer.id,
    type: 'fill',
    source: layer.id,
    paint: {
      'fill-color': layer.color,
      'fill-outline-color': layer.color,
      'fill-opacity': 0.5
    }
  };
};

export const lineStyle = layer => {
  return {
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
  };
};

export const pointStyle = layer => {
  return {
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
  };
};

export const tmsStyle = tmsLayer => {
  return {
    id: tmsLayer.id,
    type: 'raster',
    source: {
      type: 'raster',
      tiles: [tmsLayer.url],
      tileSize: 256
    },
    paint: {}
  };
};

export const highlightStyle = {
  id: 'highlight-feature',
  type: 'line',
  source: 'highlight-feature',
  layout: {
    'line-cap': 'round',
    'line-join': 'round'
  },
  paint: {
    'line-color': '#eeff00',
    'line-width': 10,
    'line-opacity': 0.4
  }
};
