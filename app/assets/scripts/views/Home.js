import React, { Component } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

class Home extends Component {
  render () {
    return (
      <div className="container">
        {/* sidebar-collased */}
        <Header/>
        <Sidebar/>

        <main>

        </main>

        <aside>

        </aside>

        <footer>

        </footer>
      </div>

    );
  }
}

export default Home;
