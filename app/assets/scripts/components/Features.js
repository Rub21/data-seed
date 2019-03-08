import React, { Component } from 'react';
import { connect } from 'react-redux';

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
import { Fade } from '@material-ui/core';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Feature from './Feature';

class Features extends Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null,
      open: false
    };
    this.handleToggle = this.handleToggle.bind(this);
    this.handleClose = this.handleClose.bind(this);
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
    // this.setState({ open: false });
  }

  render() {
    const { open } = this.state;
    const features = this.props.layer.data ? this.props.layer.data.features : [];

    let headers = {};
    for (let i = 0; i < features.length; i++) {
      headers = Object.assign(headers, features[i].properties);
    }
    headers = Object.keys(headers);
    console.log('------------------------------------');
    console.log(headers);
    console.log('------------------------------------');
    return (
      <div className="featuresContainer">
        <Fab
          size="small"
          color="default"
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
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell>Dessert (100g serving)</TableCell>
                          <TableCell align="right">Calories</TableCell>
                          <TableCell align="right">Fat (g)</TableCell>
                          <TableCell align="right">Carbs (g)</TableCell>
                          <TableCell align="right">Protein (g)</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {features.map(row => (
                          <TableRow key={row.id}>
                            <TableCell component="th" scope="row">
                              {row.name}
                            </TableCell>
                            <TableCell align="right">{row.calories}</TableCell>
                            <TableCell align="right">{row.fat}</TableCell>
                            <TableCell align="right">{row.carbs}</TableCell>
                            <TableCell align="right">{row.protein}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>

                    {/* <List>
                      {features.map(feature => (
                        <Feature feature={feature} />
                      ))}
                    </List> */}
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

function mapStateToProps(state) {
  return {
    layer: state.layer
  };
}
export default connect(mapStateToProps)(Features);
