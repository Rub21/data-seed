import React from 'react';
import mapboxgl from 'mapbox-gl';
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

    render() {
        return <main ref={el => (this.mapContainer = el)} className="mapContent" />;
    }
}

export default Map;
