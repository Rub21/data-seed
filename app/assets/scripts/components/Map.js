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

            } else {
                // /**
                //  * Hide all the nightlight layers and display the active item
                //  */
                // const layers = map.getStyle().layers;
                // for (let i = 0; i < layers.length; i++) {
                //     if (
                //         layers[i].id.split(':')[0] === 'nightlight' &&
                //         layerId !== layers[i].id
                //     ) {
                //         map.setLayoutProperty(layers[i].id, 'visibility', 'none');
                //     }
                // }
                // map.setLayoutProperty(layerId, 'visibility', 'visible');
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
