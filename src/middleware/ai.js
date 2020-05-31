import {
  MOVE_INITIATED
} from '../constants/actions'

import {
  AI_COLOR
} from '../constants/colors'

import {
  pieceSelected,
  moveInitiated
} from '../actions'

const aiMoveDelay = 1000

export default store => next => async action => {
  next(action)

  if (action.type === MOVE_INITIATED.RECEIVE) {
    const {
      chess: {
        fen,
        turn,
        moves,
        analysis
      }
    } = store.getState()

    if (turn === AI_COLOR) {
      if (!analysis?.bestMove) {
        console.log('@todo no best move! playing a random...')
      }
      const { from, to } = analysis ? analysis.bestMove : moves[0] // todo check for promotion flag
      store.dispatch(pieceSelected(from))
      await new Promise(resolve => setTimeout(resolve, aiMoveDelay))
      store.dispatch(moveInitiated(fen, { from, to }))
    }
  }
}
