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
        if (nextProps.activeVectorLayer && nextProps.activeVectorLayer.bbox) {
            this.map.fitBounds(nextProps.activeVectorLayer.bbox);
        }

        /**
         * Set the layer
         */
        const vectorLayers = nextProps.vectorLayers;
        for (let i = 0; i < vectorLayers.length; i++) {
            const vectorLayer = vectorLayers[i];
            if (!this.map.getSource(vectorLayer.id)) {

                this.map.addSource(vectorLayer.id, {
                    type: 'geojson',
                    data: vectorLayer.data
                });

                if (vectorLayer.display === 'polygon') {
                    this.map.addLayer({
                        id: vectorLayer.id,
                        type: 'fill',
                        source: vectorLayer.id,
                        paint: {
                            'fill-color': vectorLayer.color,
                            'fill-outline-color': vectorLayer.color,
                            'fill-opacity': 0.5
                        }
                    });

                } else if (vectorLayer.display === 'point') {

                    this.map.addLayer({
                        'id': vectorLayer.id,
                        'type': 'circle',
                        'source': vectorLayer.id,
                        'paint': {
                            // make circles larger as the user zooms from z12 to z22
                            'circle-radius': {
                                'base': 1.75,
                                'stops': [[12, 2], [22, 180]]
                            },
                            'circle-color': vectorLayer.color
                        }
                    });

                } else if (vectorLayer.display === 'line') {
                    this.map.addLayer({
                        'id': vectorLayer.id,
                        'type': 'line',
                        'source': vectorLayer.id,
                        'layout': {
                            'line-join': 'round',
                            'line-cap': 'round'
                        },
                        'paint': {
                            'line-color': vectorLayer.color,
                            'line-width': 2
                        }
                    });
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
        activeVectorLayer: state.activeVectorLayer
    };
}

export default connect(mapStateToPops)(Map);
