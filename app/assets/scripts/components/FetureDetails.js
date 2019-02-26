import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class FeatureDetails extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      // <aside >
      <div className="asideContent">
        <p className="dropcap">
          The dropcap is the capitalized first letter of a paragraph. It’s not for every occasion, but when the
          post/page starts with a paragraph that spans at least two full lines it should be added as it has a big impact
          on the look and feel of the post.
        </p>
      </div>
    );
  }
}

FeatureDetails.propTypes = {};

function mapStateToPops(state, ownProps) {
  return {
    layers: state.layers
  };
}
const mapDispatchToProps = {};

export default connect(
  mapStateToPops,
  mapDispatchToProps
)(FeatureDetails);
