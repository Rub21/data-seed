import React, { Component } from 'react';
import PropTypes from 'prop-types';
import VectorLayer from './VectorLayer';

class VectorLayers extends Component {
  render () {
    const layers = this.props.vectorLayers;
    return (
      <nav className="nav nav--negative nav--contained nav--vertical">
        <div className="nav__contents">
          <h3 className="nav__label">Vector Layers</h3>
          <ul className="nav__tablist">
            {layers.map(layer => (
              <VectorLayer key={layer.id} layer={layer}></VectorLayer>
            ))}
          </ul>
        </div>
      </nav>
    );
  }
}

VectorLayers.propTypes = {
  vectorLayers: PropTypes.array.isRequired
};

export default VectorLayers;
