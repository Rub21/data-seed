import React, { Component } from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';

import ListSubheader from '@material-ui/core/ListSubheader';

import Layer from './Layer';

class Layers extends Component {
  render () {
    const layers = this.props.layers;
    return (

      <sidebar>
        <div className="sidebar_container">
          <div className="sidebar_content">
            <nav className="nav nav--contained nav--vertical">
              <div className="nav__contents">
                <List subheader={<ListSubheader>Settings</ListSubheader>}>
                  {layers.map(layer => (
                    <Layer key={layer.id} layer={layer}></Layer>
                  ))}
                </List>
              </div>
            </nav>
          </div>
        </div>
      </sidebar>

    );
  }
}

export default Layers;
