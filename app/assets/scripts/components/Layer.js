import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Switch from '@material-ui/core/Switch';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import MapIcon from '@material-ui/icons/map';

import { SetActiveLayer, ZoomToLayer } from '../actions/LayerActions';
import { setLayers, HideShowLayers } from '../actions/LayersActions';

class Layer extends Component {
  constructor (props) {
    super(props);
    this.zoomToLayer = this.zoomToLayer.bind(this);
    this.hideOrShowLayer = this.hideOrShowLayer.bind(this);
  }

  /**
   * Set active a layer, it will zoom to the layer and display properties
   */
  zoomToLayer () {
    const layer = this.props.layer;
    this.props.ZoomToLayer(layer.bbox);
  }

  /**
   *
   */
  hideOrShowLayer () {
    let layers = this.props.layers;
    const layer = this.props.layer;
    for (let i = 0; i < layers.length; i++) {
      if (layers[i].id === layer.id) {
        layers[i].showLayer = !layers[i].showLayer;
      }
    }
    this.props.HideShowLayers(layers);
  }

  render () {
    return (
      <ListItem onClick={this.zoomToLayer}>
        <ListItemIcon>
          <MapIcon />
        </ListItemIcon>
        <ListItemText primary={this.props.layer.name} />
        <ListItemSecondaryAction>
          <Switch
            onChange={this.hideOrShowLayer}
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
  ZoomToLayer: PropTypes.func.isRequired,
  HideShowLayers: PropTypes.func.isRequired
};

function mapStateToPops (state, ownProps) {
  return {
    layers: state.layers
  };
}
const mapDispatchToProps = {
  SetActiveLayer,
  ZoomToLayer,
  HideShowLayers
};

export default connect(
  mapStateToPops,
  mapDispatchToProps
)(Layer);
