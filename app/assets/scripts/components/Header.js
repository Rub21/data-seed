import React, { Component } from 'react';

class Header extends Component {
  render () {
    return (
      <header>
        <div className="header-container">
          <ul className="header_navigation" role="navigation">
            <li className="header_navigation_collased_icon">
              <buton className="button" onClick={this.props.toggleSidebar}>☰</buton>
            </li>
            <li className="header_navigation_title">
              <a href=""> <h1>
                Data seed
              </h1>
              </a>
            </li>
            <li className="nav__tab" role="presentation">
              <a href="#" className="nav__link nav__link--active" title="View item" role="tab"><span>About</span></a>
            </li>
          </ul>
        </div>
      </header>
    );
  }
}

export default Header;
