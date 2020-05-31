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
        analysis: {
          bestMove: { from, to } // todo check for promotion flag
        }
      }
    } = store.getState()

    if (turn === AI_COLOR) {
      store.dispatch(pieceSelected(from))
      await new Promise(resolve => setTimeout(resolve, aiMoveDelay))
      store.dispatch(moveInitiated(fen, { from, to }))
    }
  }
}
