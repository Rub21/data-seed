'use strict';

export default {
  environment: 'production',
  mbtoken: 'pk.eyJ1IjoiZGV2c2VlZCIsImEiOiJnUi1mbkVvIn0.018aLhX0Mb0tdtaT2QNe2Q',
  mbstyle: 'mapbox://styles/devseed/cjoaeoh3g075d2rjh0ss9at1f',
  layers: [

    {
      name: 'Test area colombia',
      id: 'testArea',
      type: 'vector',
      color: '#c300ff',
      display: 'line',
      url:
        'https://gist.githubusercontent.com/osmpe/6556dcbf741a1b7b7b95f42abba158aa/raw/9ff17892307c3040f7a99d33b04056bdda7fcb48/reg.geojson',
      showLayer: true
    },
    {
      name: 'Monaco',
      id: 'Monaco',
      type: 'vector',
      color: '#c300ff',
      display: 'line',
      url:
        'https://gist.githubusercontent.com/Rub21/841d507390e62a552e06e4603e8de72f/raw/3e651bd224bb5ad25a097bd62b6daf9ac05ba8c8/monaco.geojson',
      showLayer: true
    },
    {
      name: 'Woredas',
      id: 'woredas',
      type: 'vector',
      color: '#c300ff',
      display: 'polygon',
      url:
        'https://gist.githubusercontent.com/Rub21/9d8546a6bc70d0de781cf22d20bd52ce/raw/b162c035b3f2f353a3f003122ccd0f34e93f7d40/woredas.geojson',
      showLayer: true
    }
  ],
  tmsLayers: [
    {
      name: ' openstreetmap',
      id: 'OpenStreetMap',
      type: 'tms',
      url: 'https://a.tile.openstreetmap.org/{z}/{x}/{y}.png',
      showLayer: true
    }
  ]
};
