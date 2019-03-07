export const polygonStyle = layer => {
  let style = {
    id: layer.id,
    type: 'fill',
    source: layer.id,
    paint: {
      'fill-color': layer.color,
      'fill-outline-color': layer.outline_color || '#000000',
      'fill-opacity': 0.5
    },
    filter: ['==', ['geometry-type'], 'Polygon']
  };

  if (layer.type === 'vector') {
    style['source-layer'] = layer.source_layer;
  }
  return style;
};

export const pointStyle = layer => {
  let style = {
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

  if (layer.type === 'vector') {
    style['source-layer'] = layer.source_layer;
  }
  return style;
};

export const lineStyle = layer => {
  let style = {
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

  if (layer.type === 'vector') {
    style['source-layer'] = layer.source_layer;
  }
  return style;
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

export const highlightStyleLine = {
  id: 'highlight-feature-line',
  type: 'line',
  source: 'highlight-feature-line',
  layout: {
    'line-cap': 'round',
    'line-join': 'round'
  },
  paint: {
    'line-color': '#eeff00',
    'line-width': 6,
    'line-opacity': 0.4
  }
};

export const highlightStylePoint = {
  id: 'highlight-feature-point',
  type: 'circle',
  source: 'highlight-feature-point',
  paint: {
    'circle-radius': {
      base: 2,
      stops: [[12, 2], [22, 180]]
    },
    'circle-color': '#eeff00'
  }
};
