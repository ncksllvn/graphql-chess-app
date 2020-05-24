import React from 'react';
import { connect } from 'react-redux'

import Board from './components/Board'
import { startApp } from './actions'

class App extends React.Component {
  componentDidMount() {
    this.props.startApp()
  }

  render() {
    const {
      appStatus: { loading, errors }
    } = this.props

    return (
      <>
        {loading && <div className="chess-loading">Contacting server...</div>}
        {errors && <code>{JSON.stringify(errors)}</code>}
        <Board/>
      </>
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
  startApp
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
export { App };
