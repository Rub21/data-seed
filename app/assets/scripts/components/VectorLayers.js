import React, { Component } from 'react';
import VectorLayer from './VectorLayer';

class VectorLayers extends Component {
  render () {
    return (
      <nav className="nav nav--negative nav--contained nav--vertical">
        <div className="nav__contents">
          <h3 className="nav__label">Vector Layers</h3>
          <ul className="nav__tablist">
            {this.props.vectorLayers.map(layer => (
              <VectorLayer key={layer.id} layer={layer}></VectorLayer>
            ))}
          </ul>
        </div>
      </nav>
    );
  }
}

export default VectorLayers;
