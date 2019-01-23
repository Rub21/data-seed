import React, { Component } from 'react';

class Header extends Component {
  render () {
    return (
      <header>
        <div className="header-container">
          <div className="title">
            <a href="#" title="Data seed Homepage">
              <h1>
                Data seed
              </h1>
            </a>
          </div>
          <div>
            <ul className="nav__tablist" role="tablist">
              <li className="nav__tab" role="presentation">
                <a href="#" className="nav__link nav__link--active" title="View item" role="tab"><span>About</span></a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
