import React, { Component } from 'react';
import { connect } from 'react-redux';

class FeatureDetailsRow extends Component {
  render() {
    return (
      <div>
        <strong>{this.props.key}</strong>
        <span>{this.props.value}</span>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(FeatureDetailsRow);
