import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ShowChart from '@material-ui/icons/ShowChart';
import Widgets from '@material-ui/icons/Widgets';
import ScatterPlot from '@material-ui/icons/ScatterPlot';

class Feature extends Component {
  render() {
    return <div>{JSON.stringify(this.props.feature.properties)}</div>;
  }
}
function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(Feature);
