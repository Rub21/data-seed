import React, { Component } from 'react';
import MenuLayers from './MenuLayers';
class Sidebar extends Component {
  render () {
    return (
      <sidebar>
        <div className="sidebar_container">
          {/* <div className="sidebar_title_header">
            Layers
          </div> */}

          <div className="sidebar_content">
    

            <MenuLayers/>

            {/* <ul>
              <li className="collased">
                <i className="uisi-pencil"></i> <span> New 1</span>
              </li>
              <li className="collased">
                <i className="uisi-pencil"></i> <span> New 2</span>
              </li>
              <li className="collased">
                <i className="uisi-pencil"></i> <span> New 1</span>
              </li>
              <li className="collased">
                <i className="uisi-pencil"></i> <span> New 1</span>
              </li>
              <li className="collased">
                <i className="uisi-pencil"></i> <span> New 1</span>
              </li>
            </ul> */}
          </div>
          <div className="sidebar_footer">
            dsd
          </div>

        </div>
      </sidebar>
    );
  }
}

export default Sidebar;
