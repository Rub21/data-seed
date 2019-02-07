import React, { Component } from 'react';
import classNames from 'classnames';

import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Map from '../components/Map';
class Home extends Component {
  constructor (props) {
    super(props);
    this.state = {
      isSidebarCollased: false
    };
    this.toggleSidebar = this.toggleSidebar.bind(this);
  }

  toggleSidebar () {
    this.setState({
      isSidebarCollased: !this.state.isSidebarCollased
    });
  }
  render () {
    
    const classes = classNames({
      'container': true,
      'sidebar-collased': this.state.isSidebarCollased
    });

    return (
      <div className={classes}>
        {/* sidebar-collased */}
        <Header toggleSidebar={this.toggleSidebar} />
        <Sidebar />
        <Map isSidebarCollased={this.state.isSidebarCollased}></Map>

        <footer>
        </footer>
      </div>

    );
  }
}

export default Home;
