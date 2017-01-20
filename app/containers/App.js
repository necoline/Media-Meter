import React from 'react';
import Analytics from '../components/Analytics';
import Activity from '../components/Activity';
// import Chart from '../components/Chart';
// import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
  return (
    <div>
      <nav id="nav-bar">
        <div className="nav-wrapper">
          <a href="/" className="brand-logo">  Media Meter</a>
          <a href="#" data-activates="mobile" className="button-collapse"><i className="material-icons">menu</i></a>
        </div>
      </nav>
      <div className="row">
        <div className="row s12 m6 container">
          <Analytics />
        </div>
      </div>
    </div>

    )

  }
}

export default App;
