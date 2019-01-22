import React, { Component } from 'react';
import { Grid, Cell } from "styled-css-grid";

class Home extends Component {
  render() {
    return (
      <div class="wrapper">
        <div class="box header">Header</div>
        <div class="box sidebar">Sidebar</div>
        <div class="box sidebar2">Sidebar 2</div>
        <div class="box content">Map</div>
        <div class="box footer">Footer</div>
      </div>

      // </div>
      // <div>
      //   <div className="exhibit">
      //     <div className="exhibit__content prose prose--responsive">
      //       <div className="alert alert--popover alert--danger" role="alert">
      //         <button className="alert__button-dismiss" title="Dismiss alert"><span>Dismiss</span></button>
      //         <p><strong>Danger:</strong> This a message. Popover style!</p>
      //       </div>
      //     </div>
      //   </div>
      // </div>
    );
  }
}

export default Home;
