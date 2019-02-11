import React, { Component } from 'react';

class MenuLayers extends Component {
  render () {
    return (
      <nav className="nav nav--negative nav--contained nav--vertical">
        <div className="nav__contents">
          <h3 className="nav__label">Vector Layers</h3>
          <ul className="nav__tablist">
            {this.props.vectorLayers.map(vectorLayer => (
              <li className="nav__link-1">
                <i className="uisi-map"></i><span>{vectorLayer.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    );
  }
}

export default MenuLayers;
