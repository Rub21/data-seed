import React, { Component } from 'react';

class Header extends Component {
  render () {
    return (
      <header>
        <div className="header-container">
          <ul className="header_navigation" role="navigation">
            <li className="header_navigation_collased_icon">
              <h2>☰</h2>
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

          {/* <div className="title-container">
            <div>
              <h2>☰</h2>
            </div>
            <div>
              <a href="#">
                <h1>
                  Data seed
              </h1>
              </a>
            </div>
          </div>
          <div>
            <ul className="nav__tablist" role="tablist">
              <li className="nav__tab" role="presentation">
                <a href="#" className="nav__link nav__link--active" title="View item" role="tab"><span>About</span></a>
              </li>
            </ul>
          </div> */}
        </div>
      </header>
    );
  }
}

export default Header;
