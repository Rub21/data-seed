import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Switch from '@material-ui/core/Switch';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import WifiIcon from '@material-ui/icons/Wifi';

import { SetActiveLayer, ZoomToLayer } from '../actions/LayerActions';
// import {  HideShowVectorLayers } from '../actions/LayersActions';

class Layer extends Component {
  constructor (props) {
    super(props);
    this.setVectorLayer = this.setVectorLayer.bind(this);
    this.hideShowLayer = this.hideShowLayer.bind(this);
  }

  /**
   * Set active a layer, it will zoom to the layer and display properties
   */
  setVectorLayer () {
    const layer = this.props.layer;
    console.log('------------------------------------');
    console.log(layer);
    console.log('------------------------------------');
    this.props.ZoomToLayer(layer.bbox);
  }

  /**
   *
   */
  hideShowLayer () {
    let layers = this.props.layers;
    const layer = this.props.layer;
    for (let i = 0; i < layers.length; i++) {
      if (layers[i].id === layer.id) {
        layers[i].showLayer = !layers[i].showLayer;
      }
    }
    // this.props.HideShowVectorLayers(vectorLayers);
  }

  render () {
    return (
      <ListItem onClick={this.setVectorLayer} >
        <ListItemIcon>
          <WifiIcon />
        </ListItemIcon>
        <ListItemText primary={this.props.layer.name} />
        <ListItemSecondaryAction>
          <Switch
            onChange={this.hideShowLayer}
            checked={this.props.layer.showLayer}
          />
        </ListItemSecondaryAction>
      </ListItem>
    );
  }
}

Layer.propTypes = {
  layers: PropTypes.array.isRequired,
  layer: PropTypes.object.isRequired,
  SetActiveLayer: PropTypes.func.isRequired,
  ZoomToLayer: PropTypes.func.isRequired
  // HideShowVectorLayer: PropTypes.func.isRequired
};

function mapStateToPops (state, ownProps) {
  return {
    layers: state.layers
  };
}
const mapDispatchToProps = {
  SetActiveLayer,
  ZoomToLayer
  // HideShowVectorLayers
};

export default connect(mapStateToPops, mapDispatchToProps)(Layer);
