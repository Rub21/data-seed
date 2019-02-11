import React, { Component } from 'react';
import { SetActiveVectorLayer } from '../actions/VectorLayerActions';
import { connect } from 'react-redux';

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

const mapDispatchToProps = {
  SetActiveVectorLayer
};

export default connect(null, mapDispatchToProps)(VectorLayer);
