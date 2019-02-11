import React, { Component } from 'react';
import VectorLayers from './VectorLayers';
import PropTypes from 'prop-types';

class Sidebar extends Component {
  render () {
    return (
      <sidebar>
        <div className="sidebar_container">
          <div className="sidebar_content">
            <VectorLayers vectorLayers={this.props.vectorLayers} />
          </div>
        </div>
      </sidebar>
    );
  }
}

Sidebar.propTypes = {
  vectorLayers: PropTypes.array.isRequired
};

export default Sidebar;
