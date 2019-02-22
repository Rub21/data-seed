import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import MapIcon from '@material-ui/icons/map';

import Layer from './Layer';

class Layers extends Component {
  render () {
    const layers = this.props.layers;
    return (
      <nav>
        <div className="sidebar_container">
          <div className="sidebar_content">
            <nav className="nav nav--contained nav--vertical">
              <div className="nav__contents">
                <List subheader={<ListSubheader>Layers</ListSubheader>}>
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

function mapStateToPops (state, ownProps) {
  return {
    layers: state.layers
  };
}

export default connect(mapStateToPops)(Layers);
