'use strict';

export default {
  environment: 'production',
  mbtoken: 'pk.eyJ1IjoiZGV2c2VlZCIsImEiOiJnUi1mbkVvIn0.018aLhX0Mb0tdtaT2QNe2Q',
  mbstyle: 'mapbox://styles/devseed/cjoaeoh3g075d2rjh0ss9at1f',
  pageTitle: 'OSM Tiles coverage - Colombia',
  layers: [
    {
      name: 'OSM Tiles coverage',
      id: '1',
      type: 'vector',
      color: '#8359d1',
      outline_color: '#5e009e',
      display: 'polygon',
      url: 'mapbox://devseed.0e0ol9fw',
      source_layer: 'colombia-tiles-burvu1',
      showLayer: true
    },
    {
      name: 'Colombia bounduary',
      id: '2',
      type: 'geojson',
      color: '#e5e43d',
      display: 'polygon',
      url:
        'https://gist.githubusercontent.com/piligab/e4bf07f77eeb80b2e3fcb22ee46ae531/raw/5760245928293af087a5cec0e0de78376b5d4431/boundary_colombia_simplified.geojson',
      showLayer: false
    }
  ],
  tmsLayers: [
    {
      name: ' openstreetmap',
      id: 'OpenStreetMap',
      type: 'tms',
      url: 'https://a.tile.openstreetmap.org/{z}/{x}/{y}.png',
      showLayer: true
    },
    {
      id: 'esri-world-imagery',
      name: 'Esri World Imagery',
      type: 'tms',
      url: 'https://server.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
      showLayer: false
    }
  ]
};
