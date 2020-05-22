import React, { useEffect } from 'react';
import { connect } from 'react-redux'

import { initChess } from './actions'
import logo from './logo.svg';
import './App.css';

function App({ initChess, appStatus }) {
  useEffect(() => {
    initChess()
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {JSON.stringify(appStatus)}
      </header>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    appStatus: state.appStatus
  }
}
const mapDispatchToProps = {
  initChess
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
export { App };
