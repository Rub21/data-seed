import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import Layer from './Layer';
import Feature from './Feature';

class Layers extends Component {
  render() {
    const layers = this.props.layers;
    return (
      <nav>
        <div className="sidebar_container">
          <div className="sidebar_content">
            <nav className="nav nav--contained nav--vertical">
              <div className="nav__contents">
                <ListSubheader>Vector Layers</ListSubheader>
                <List className="layers_contents">
                  {layers.map(layer => (
                    <Layer key={layer.id} layer={layer} />
                  ))}
                </List>
              </div>
            </nav>
          </div>
        </div>
      </nav>
    );
  }
}

Layers.propTypes = {
  layers: PropTypes.array.isRequired
};

function mapStateToPops(state, ownProps) {
  return {
    layers: state.layers,
    layer: state.layer
  };
}

export default connect(mapStateToPops)(Layers);
