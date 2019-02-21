import React from 'react';
import mapboxgl from 'mapbox-gl';
import { connect } from 'react-redux';

import { mbtoken, mbstyle, environment } from '../config';
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

    }

    componentWillReceiveProps(nextProps) {
        /**
         * Zoom to layer
         */
        if (nextProps.bbox) {
            this.map.fitBounds(nextProps.bbox);
        }

        /**
         * Set the layers on the map
         */
        const layers = nextProps.layers;
        for (let i = 0; i < layers.length; i++) {
            const layer = layers[i];
            if (!this.map.getSource(layer.id)) {
                this.map.addSource(layer.id, {
                    type: 'geojson',
                    data: layer.data
                });
                if (layer.display === 'polygon') {
                    this.map.addLayer({
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

                    this.map.addLayer({
                        'id': layer.id,
                        'type': 'circle',
                        'source': layer.id,
                        'paint': {
                            // make circles larger as the user zooms from z12 to z22
                            'circle-radius': {
                                'base': 1.75,
                                'stops': [[12, 2], [22, 180]]
                            },
                            'circle-color': layer.color
                        }
                    });

                } else if (layer.display === 'line') {
                    this.map.addLayer({
                        'id': layer.id,
                        'type': 'line',
                        'source': layer.id,
                        'layout': {
                            'line-join': 'round',
                            'line-cap': 'round'
                        },
                        'paint': {
                            'line-color': layer.color,
                            'line-width': 2
                        }
                    });
                }

                /**
                 * Show or hide the Layer
                 */

                this.map.setLayoutProperty(layer.id, 'visibility', layer.showLayer ? 'visible' : 'none');

            }
        }


        // /**
        // * Hide and show layer
        // */
        // if (nextProps.vectorLayer) {
        //     console.log('------------------------------------');
        //     console.log(nextProps.vectorLayer);
        //     console.log('------------------------------------');
        //     this.map.setLayoutProperty(nextProps.vectorLayer.id, 'visibility', nextProps.vectorLayer.showLayer ? 'visible' : 'none');
        // }

    }

    render() {
        return <main ref={el => (this.mapContainer = el)} className="mapContent" />;
    }
}

function mapStateToPops(state, ownProps) {
    return {
        layers: state.layers,
        bbox: state.bbox
    };
}

export default connect(mapStateToPops)(Map);
