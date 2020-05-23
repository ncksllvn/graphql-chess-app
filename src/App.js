import React from 'react';
import { connect } from 'react-redux'

import ChessBoard from './components/ChessBoard'
import { getChessAndConstants } from './actions'

class App extends React.Component {
  componentDidMount() {
    this.props.initApp()
  }

  render() {
    const {
      appStatus: { loading },
      chess
    } = this.props

    return (
      <>
        {loading ? (
          <div className="chess-loading">Contacting server...</div>
        ) : <ChessBoard board={chess.board}/> }
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
  initApp: getChessAndConstants
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
export { App };
