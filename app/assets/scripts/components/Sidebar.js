import React, { Component } from 'react';
import MenuLayers from './MenuLayers';
class Sidebar extends Component {
  render () {
    return (
      <sidebar>
        <div className="sidebar_container">
          <div className="sidebar_content">
            <MenuLayers/>
          </div>
        </div>
      </sidebar>
    );
  }
}

export default Sidebar;
