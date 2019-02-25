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
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import WifiIcon from '@material-ui/icons/Wifi';
import BluetoothIcon from '@material-ui/icons/Bluetooth';

import { HideShowTMSLayers } from '../actions/TmsLayersActions';

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

  handleToggleLayers(id, e) {
    const tmsLayers = this.props.tmsLayers;
    for (let i = 0; i < tmsLayers.length; i++) {
      if (tmsLayers[i].id === id) {
        tmsLayers[i].showLayer = !tmsLayers[i].showLayer;
      }
    }
    this.props.HideShowTMSLayers(tmsLayers);
  }

  handleToggle(event) {
    const { currentTarget } = event;
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
    const tmsLayers = this.props.tmsLayers;
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
          style={{
            marginRight: -240,
            marginTop: -30,
            width: 200,
            maxWidth: 200
          }}
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              id="menu-list-grow"
              style={{
                transformOrigin: 'left bottom',
                backgroundColor: 'rgba(255,255,255,0.9)'
              }}
            >
              <ClickAwayListener onClickAway={this.handleClose}>
                <Fade {...TransitionProps} timeout={350}>
                  <Paper>
                    <List>
                      {tmsLayers.map(layer => (
                        <ListItem key={layer.id}>
                          {/* <ListItemIcon>
                          <WifiIcon />
                        </ListItemIcon> */}
                          <ListItemText
                            primary={layer.name}
                            style={{ marginRight: 10 }}
                          />
                          <ListItemSecondaryAction>
                            <Switch
                              onChange={e =>
                                this.handleToggleLayers(layer.id, e)
                              }
                              checked={layer.showLayer}
                            />
                          </ListItemSecondaryAction>
                        </ListItem>
                      ))}
                    </List>
                  </Paper>
                </Fade>
              </ClickAwayListener>
            </Grow>
          )}
        </Popper>
      </div>
    );
  }
}

function mapStateToPops(state, ownProps) {
  return {
    tmsLayers: state.tmsLayers
  };
}

const mapDispatchToProps = {
  HideShowTMSLayers
};

export default connect(
  mapStateToPops,
  mapDispatchToProps
)(TmsLayers);
