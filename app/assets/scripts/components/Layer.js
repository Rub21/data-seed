import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ShowChart from '@material-ui/icons/ShowChart';
import Widgets from '@material-ui/icons/Widgets';
import ScatterPlot from '@material-ui/icons/ScatterPlot';

import { SetActiveLayer, ZoomToLayer } from '../actions/LayerActions';
import { HideShowLayers } from '../actions/LayersActions';

class Layer extends Component {
  constructor(props) {
    super(props);
    this.zoomToLayer = this.zoomToLayer.bind(this);
    this.hideOrShowLayer = this.hideOrShowLayer.bind(this);
    this.setActiveLayer = this.setActiveLayer.bind(this);
  }

  /**
   * Set active a layer, it will zoom to the layer and display properties
   */
  zoomToLayer() {
    const layer = this.props.layer;
    this.props.ZoomToLayer(layer.bbox);
  }

  /**
   *
   */
  hideOrShowLayer() {
    let layers = this.props.layers;
    const layer = this.props.layer;
    for (let i = 0; i < layers.length; i++) {
      if (layers[i].id === layer.id) {
        layers[i].showLayer = !layers[i].showLayer;
      }
    }
    this.props.HideShowLayers(layers);
  }

  setActiveLayer() {
    let layers = this.props.layers;
    let activeLayer = {};
    const layer = this.props.layer;
    for (let i = 0; i < layers.length; i++) {
      if (layers[i].id === layer.id) {
        layers[i].active = true;
        activeLayer = layers[i];
      } else {
        layers[i].active = false;
      }
    }
    this.props.HideShowLayers(layers);
    this.props.SetActiveLayer(activeLayer);
  }

  typeIcon(display) {
    const style = { color: this.props.layer.color, width: '20px' };
    if (display === 'line') {
      return <ShowChart style={style} />;
    } else if (display === 'point') {
      return <ScatterPlot style={style} />;
    } else {
      return <Widgets style={style} />;
    }
  }
  render() {
    return (
      <ListItem onClick={this.zoomToLayer} style={{ marginTop: 2, marginBottom: 2 }}>
        <ListItemIcon>{this.typeIcon(this.props.layer.display)}</ListItemIcon>
        <ListItemText style={{ paddingLeft: 1, paddingRight: 1 }} primary={this.props.layer.name} />
        <ListItemSecondaryAction>
          <div className="action_buttons_contents">
            <label className="form__option form__option--custom-radio">
              <input type="radio" name="form-radio" checked={this.props.layer.active} onChange={this.setActiveLayer} />
              <span
                className="form__option__ui"
                style={{
                  width: '1rem',
                  height: '1rem'
                }}
              />
            </label>
            <label htmlFor={this.props.layer.id} className="form__option form__option--switch">
              <input
                type="checkbox"
                name={this.props.layer.id}
                id={this.props.layer.id}
                defaultChecked={this.props.layer.showLayer}
                onChange={this.hideOrShowLayer}
              />
              <span
                className="form__option__ui"
                style={{
                  width: '1.8rem',
                  height: '0.8rem',
                  marginLeft: 5
                }}
              />
            </label>
          </div>
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

function mapStateToPops(state, ownProps) {
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
