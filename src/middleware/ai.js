import {
  MOVE_INITIATED
} from '../constants/actions'

import {
  AI_COLOR
} from '../constants/colors'

import PIECES from '../constants/pieces'

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
      let move = null

      if (!analysis?.bestMove) {
        move = moves[0]
      } else {
        // @todo bestMove doesn't include the promotion flag, so we grab
        // the corresponding move from the moves array
        const { bestMove } = analysis
        move = moves.find(
          move => move.from === bestMove.from && move.to === bestMove.to
        )
      }

      let { from, to, promotion } = move

      if (promotion) {
        promotion = PIECES.QUEEN
      }

      store.dispatch(
        pieceSelected(from)
      )

      await new Promise(resolve => setTimeout(resolve, aiMoveDelay))

      store.dispatch(
        moveInitiated(fen, { from, to, promotion })
      )
    }
  }
}
