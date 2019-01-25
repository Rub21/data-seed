import React, { Component } from 'react';

class MenuLayers extends Component {
  render() {
    return (
      <nav className="nav nav--negative nav--contained nav--vertical">
        <div className="nav__contents">
          <h3 className="nav__label">Layers</h3>
          <ul className="nav__tablist">
            <li className="nav__link-1">
                <i className="uisi-map"></i><span>Cards</span>
            </li>
            <li className="nav__link-1">
                <i className="uisi-map"></i><span>List</span>
            </li>
            <li className="nav__link-1">
                <i className="uisi-map"></i><span>Map</span>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default MenuLayers;
