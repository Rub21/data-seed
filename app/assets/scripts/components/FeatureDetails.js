import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class FeatureDetails extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const properties = this.props.feature.properties;
    return (
      // <aside >
      <div className="asideContent">
        <ul>
          {Object.keys(properties).map((keyName, i) => (
            <li key={i}>
              <span className="label label--success">
                <strong> {keyName}: </strong>
                {properties[keyName]}
              </span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

FeatureDetails.propTypes = {};

function mapStateToPops(state, ownProps) {
  return {
    feature: state.feature
  };
}
const mapDispatchToProps = {};

export default connect(
  mapStateToPops,
  mapDispatchToProps
)(FeatureDetails);
