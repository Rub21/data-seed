import React, { Component } from 'react';

class Page404 extends Component {
  render () {
    return (
      <div>
        <h2>
          No match found for {this.props.location.pathname}
        </h2>
      </div>
    );
  }
}

export default Page404;
