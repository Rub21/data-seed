import React, { Component } from 'react';
import { pageTitle } from '../config';

class Header extends Component {
  render() {
    return (
      <header>
        <div className="header-container">
          <ul className="header_navigation" role="navigation">
            <li className="header_navigation_title">
              <a href="/">
                <h1>{pageTitle || 'Data seed'}</h1>
              </a>
            </li>
          </ul>
        </div>
      </header>
    );
  }
}

// Header.propTypes = {
//   toggleSidebar: PropTypes.bool.isRequired
// };

export default Header;
