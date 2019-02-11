import React, { Component } from 'react';
import VectorLayers from './VectorLayers';
class Sidebar extends Component {
  render () {
    return (
      <sidebar>
        <div className="sidebar_container">
          <div className="sidebar_content">
            <VectorLayers vectorLayers={this.props.vectorLayers} />
            {/* <VectorLayers vectorLayers={this.props.vectorLayers} /> */}

          </div>
        </div>
      </sidebar>
    );
  }
}

export default Sidebar;
