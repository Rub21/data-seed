'use strict';

export default {
  environment: 'production',
  mbtoken: 'pk.eyJ1IjoiZGV2c2VlZCIsImEiOiJnUi1mbkVvIn0.018aLhX0Mb0tdtaT2QNe2Q',
  mbstyle: 'mapbox://styles/devseed/cjoaeoh3g075d2rjh0ss9at1f',
  layers: [
    {
      name: 'The grenadines',
      id: '1',
      type: 'vector',
      color: '#e5e43d',
      display: 'polygon',
      url:
        'https://gist.githubusercontent.com/osmpe/bae57d7b89bf595c3d8d72712fad7c2e/raw/20fe60114e8b4a38afd29f3de7758845759b56a3/the-grenadines-poly.geojson',
      showLayer: true
    },
    {
      name: 'St kitts and nevis',
      id: '2',
      type: 'vector',
      color: '#3de266',
      display: 'polygon',
      url:
        'https://gist.githubusercontent.com/osmpe/c5e4ba800d162d7e98e8fd73b2949202/raw/90a23a755af15a224390398a8262b88c943e4a99/st-kitts-and-nevis-popy.geojson',
      showLayer: true
    },

    {
      name: 'St vicent',
      id: '3',
      type: 'vector',
      color: '#c300ff',
      display: 'polygon',
      url:
        'https://gist.githubusercontent.com/osmpe/23989b649e621d8a5c7e3db20c45462e/raw/fd63657578c7da6ce8f0325a1b8303190e6d54ed/st-vicent-poly.geojson',
      showLayer: true
    },
    {
      name: 'St Lucia',
      id: '4',
      type: 'vector',
      color: '#c300ff',
      display: 'polygon',
      url:
        'https://gist.githubusercontent.com/osmpe/4106c975b3a0ea7a60e9a5bc7c601d18/raw/0670757dc9fc922660dc8d4babde9691c354834d/st-lucia-poly.geojson',
      showLayer: true
    },

    {
      name: 'Grenada',
      id: '5',
      type: 'vector',
      color: '#7795ff',
      display: 'polygon',
      url:
        'https://gist.githubusercontent.com/osmpe/c65acf9610fcb3132b6d31290470ae09/raw/d19b647e697e651b1377ebc142796c18b6fbb42c/grenada-poly.geojson',
      showLayer: true
    },
    {
      name: 'Antigua',
      id: '6',
      type: 'vector',
      color: '#c300ff',
      display: 'polygon',
      url:
        'https://gist.githubusercontent.com/osmpe/bb95f5d449e0bbf14f5cb0f625ccd105/raw/9a4e619fbb15336f91c9629122510492a2d0751d/antigua-poly.geojson',
      showLayer: true
    },
    {
      name: 'Anguilla',
      id: '7',
      type: 'vector',
      color: '#c300ff',
      display: 'polygon',
      url:
        'https://gist.githubusercontent.com/osmpe/00159aa693f35ff5767a2ed0ab6db98a/raw/2a355d33d95754971a6a609d65ed2f84517166ea/anguilla-poly.geojson',
      showLayer: true
    },

    {
      name: 'Monserrat',
      id: '8',
      type: 'vector',
      color: '#ffc107',
      display: 'polygon',
      url:
        'https://gist.githubusercontent.com/osmpe/4810d26c09f8ab2c1641b6982f0bb027/raw/e751bd97a7bbd0b3ad43ef37f1febeba9ae8f8e0/montserrat-poly.geojson',
      showLayer: true
    },
    {
      name: 'British virgin islands',
      id: '9',
      type: 'vector',
      color: '#c300ff',
      display: 'polygon',
      url:
        'https://gist.githubusercontent.com/osmpe/529de0ff65680938e3a24cebb38bbe3e/raw/b480ee686227c7b3e1cbb949ad6c2f18f434188e/british_virgin_islands-poly.geojson',
      showLayer: true
    },
    {
      name: 'Dominicana',
      id: '10',
      type: 'vector',
      color: '#c300ff',
      display: 'polygon',
      url:
        'https://gist.githubusercontent.com/osmpe/08fa0480d9ca2e229055246b67cf2763/raw/695eac6930abe0afd10e08e65bb011424bc8382f/dominica-poly.geojson',
      showLayer: true
    },
    {
      name: 'Barbuda',
      id: '11',
      type: 'vector',
      color: '#c300ff',
      display: 'polygon',
      url:
        'https://gist.githubusercontent.com/osmpe/e88a9dc65db4230d668b45765092ac82/raw/7bae2fcca026a003781daefcf1719850116e75bd/barbuda-poly.geojson',
      showLayer: true
    },
    {
      name: 'test',
      id: '12',
      type: 'vector',
      color: '#c300ff',
      display: 'polygon',
      url:
        'https://gist.githubusercontent.com/osmpe/186786b287257919d720d70cb46744e8/raw/b9327fb19eb430e0c3cdad6682a5f8751db2f262/test.geojson',
      showLayer: true
    },
    {
      name: 'Points',
      id: '13',
      type: 'vector',
      color: '#c300ff',
      display: 'point',
      url:
        'https://gist.githubusercontent.com/osmpe/c98c38dc30929c6ac8e85c71be80527a/raw/47bd536d971cd642fbbcf549ea03dd9aa04fb6e2/map.geojson',
      showLayer: true
    },
    {
      name: 'Line',
      id: '14',
      type: 'vector',
      color: '#c23569',
      display: 'line',
      url:
        'https://gist.githubusercontent.com/osmpe/3ad1707bf04789599c76e95d7a271fff/raw/0c6ec3b85b976f63207ef58c8a1e7eb30ef150b7/map.geojson',
      showLayer: true
    }
  ],
  tmsLayers: [
    {
      id: 'esri-world-imagery',
      name: 'Esri World Imagery',
      type: 'tms',
      url: 'https://server.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
      showLayer: true
    }
    // {
    //   name: ' openstreetmap',
    //   id: 'OpenStreetMap',
    //   type: 'tms',
    //   url: 'https://a.tile.openstreetmap.org/{z}/{x}/{y}.png',
    //   showLayer: true
    // }
  ]
};
