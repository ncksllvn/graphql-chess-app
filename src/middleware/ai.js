import {
  MOVE,
  AI_COLOR
} from '../constants'

import {
  moveInitiated
} from '../actions'

export default store => next => action => {
  next(action)

  if (action.type === MOVE.RECEIVE) {
    const {
      constants: {
        colorConstants
      },
      chess: {
        fen,
        turn,
        analysis: {
          bestMove: { from, to } // todo check for promotion flag
        }
      }
    } = store.getState()

    if (turn === colorConstants[AI_COLOR]) {
      store.dispatch(moveInitiated(fen, { from, to }))
    }
  }
}
