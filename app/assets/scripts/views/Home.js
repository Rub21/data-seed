import React, { Component } from 'react';

class Home extends Component {
  render () {
    return (
      <div>
        <div className="exhibit">
          <div className="exhibit__content prose prose--responsive">
            <div className="alert alert--popover alert--danger" role="alert">
              <button className="alert__button-dismiss" title="Dismiss alert"><span>Dismiss</span></button>
              <p><strong>Danger:</strong> This a message. Popover style!</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
