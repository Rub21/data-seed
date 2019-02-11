import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { SetActiveVectorLayer } from '../actions/VectorLayerActions';

class VectorLayer extends Component {
  constructor (props) {
    super(props);
    this.setVectorLayer = this.setVectorLayer.bind(this);
  }

  setVectorLayer () {
    const layer = this.props.layer;
    this.props.SetActiveVectorLayer(layer);
  }

  render () {
    return (
      <li className="nav__link-1" onClick={this.setVectorLayer}>
        <i className="uisi-map"></i><span>{this.props.layer.name}</span>
      </li>
    );
  }
}

VectorLayer.propTypes = {
  layer: PropTypes.object.isRequired,
  SetActiveVectorLayer: PropTypes.func.isRequired
};
const mapDispatchToProps = {
  SetActiveVectorLayer
};

export default connect(null, mapDispatchToProps)(VectorLayer);
