import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class FeatureDetails extends Component {
  render() {
    const properties = this.props.feature.properties;
    let propertiesList = Object.keys(properties).map((keyName, i) => {
      let item = {};
      item[keyName] = properties[keyName];
      return item;
    });
    propertiesList = propertiesList.sort(function(a, b) {
      const keyA = Object.keys(a)[0];
      const keyB = Object.keys(b)[0];
      const nameA = keyA.toLowerCase();
      const nameB = keyB.toLowerCase();
      if (nameA < nameB) return -1;
      if (nameA > nameB) return 1;
      return 0;
    });

    return (
      // <aside >
      <div className="asideContent">
        {propertiesList.length > 0 ? (
          <ul>
            {propertiesList.map((item, i) => (
              <li key={i}>
                <span className="label label--info">
                  <strong> {Object.keys(item)[0]}: </strong>
                  {Object.values(item)}
                </span>
              </li>
            ))}
          </ul>
        ) : (
          <h5> Select a feature!</h5>
        )}
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
