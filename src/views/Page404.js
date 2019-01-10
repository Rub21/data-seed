import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
class Page404 extends Component {
  render() {
    return (
      <div>
        <h2>
          <Typography variant="h5" component="h2">
            No match found for {this.props.location.pathname}{' '}
          </Typography>
          <Button component={Link} to="/">
            Home
          </Button>
        </h2>
      </div>
    );
  }
}

export default Page404;
