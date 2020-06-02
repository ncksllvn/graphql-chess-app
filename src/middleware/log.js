import { piecesBySymbol } from '../constants/pieces'
import { colorsBySymbol } from '../constants/colors'

import {
  APP_STARTED,
  MOVE_INITIATED,
  EVENT_LOGGED
} from '../constants/actions'

export default store => next => async action => {
  const log = (data) => {
    store.dispatch({ type: EVENT_LOGGED, data })
  }

  switch (action.type) {
    case APP_STARTED.REQUEST: {
      log('Initializing game...')
      break
    }

    case APP_STARTED.RECEIVE: {
      log('Game ready')
      break
    }

    case APP_STARTED.FAILURE: {
      log('Failed to start game')
      break
    }

    case MOVE_INITIATED.REQUEST: {
      const { move } = action.data.variables
      const state = store.getState()

      const from = state.chess.squares.find(
        (square) => square.id === move.from
      )

      const to = state.chess.squares.find(
        (square) => square.id === move.to
      )

      let message = null

      if (to.piece) {
        message = `
          ${colorsBySymbol.get(from.piece.color)} ${piecesBySymbol.get(from.piece.type)
          } on ${from.id} captures ${piecesBySymbol.get(to.piece.type)} on ${to.id}`
      } else {
        message = `
          ${colorsBySymbol.get(from.piece.color)} ${piecesBySymbol.get(from.piece.type)
          } moves from ${from.id} to ${to.id}`
      }

      log(message)
      break
    }

    case MOVE_INITIATED.RECEIVE: {
      const { chess } = action.data

      if (chess.inCheckmate) {
        log(`${colorsBySymbol.get(chess.turn)} is in checkmate`)
      } else if (chess.inCheck) {
        log(`${colorsBySymbol.get(chess.turn)} is in check`)
      }

      break
    }

    default:
      break
  }

  next(action)
}
