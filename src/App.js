import React from 'react';
import { connect } from 'react-redux'

import { getChessAndConstants } from './actions'
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  componentDidMount() {
    this.props.getChessAndConstants()
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          {JSON.stringify(this.props.appStatus)}
        </header>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    appStatus: state.appStatus,
    chess: state.chess
  }
}
const mapDispatchToProps = {
  getChessAndConstants
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
export { App };
