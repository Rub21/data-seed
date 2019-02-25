import React from 'react';
import PropTypes from 'prop-types';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import Fab from '@material-ui/core/Fab';
import LayersIcon from '@material-ui/icons/Layers';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Switch from '@material-ui/core/Switch';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import { connect } from 'react-redux';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import CommentIcon from '@material-ui/icons/Comment';
import { Fade } from '@material-ui/core';

class TmsLayers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null,
      open: false
    };
    this.handleToggle = this.handleToggle.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  // handleToggleLayers = value => () => {
  //     const toggleLayer = {};
  //     toggleLayer[value] = !this.state[value];
  //     this.props.dispatch(displayLayersAction.displayLayersAction(toggleLayer));
  //     this.setState(toggleLayer);
  // };

  handleToggle(event) {
    const { currentTarget } = event;
    // console.log('------------------------------------');
    // console.log(currentTarget);
    // console.log('------------------------------------');
    this.setState(state => ({
      anchorEl: currentTarget,
      open: true
    }));
  }

  handleClose(event) {
    if (this.state.anchorEl.contains(event.target)) {
      return;
    }
    this.setState({ open: false });
  }

  render() {
    const { open } = this.state;
    return (
      <div className="tmsLayersContainer">
        <Fab
          size="small"
          color="secondary"
          aria-label="Layers"
          onMouseEnter={this.handleToggle}
          onClick={this.handleToggle}
          onMouseLeave={this.handleClose}
        >
          <LayersIcon />
        </Fab>
        <Popper
          open={open}
          anchorEl={this.state.anchorEl}
          transition
          style={{ marginRight: 30, marginTop: -40 }}
        >
          {({ TransitionProps }) => (
            <ClickAwayListener onClickAway={this.handleClose}>
              <Fade {...TransitionProps} timeout={350}>
                <Paper>
                  <div style={{ width: 200, height: 300 }}>
                    <h1>Test Layers</h1>
                  </div>
                </Paper>
              </Fade>
            </ClickAwayListener>
          )}
        </Popper>
      </div>
    );
  }
}

function mapStateToPops(state, ownProps) {
  return {
    // displayLayers: state.displayLayers,
    // home: state.home,
    // item: state.item
  };
}

export default connect(mapStateToPops)(TmsLayers);
