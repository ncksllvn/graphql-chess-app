import formatDate from 'date-fns/format'

import { piecesBySymbol } from '../constants/pieces'
import { colorsBySymbol } from '../constants/colors'

import {
  APP_STARTED,
  MOVE_INITIATED,
  EVENT_LOGGED
} from '../constants/actions'

const timestampMessage = (message) => (
  `[${formatDate(new Date(), 'HH:mm:ss')}] ${message}`
)

export default store => next => async action => {
  switch (action.type) {
    case APP_STARTED.REQUEST: {
      store.dispatch({
        type: EVENT_LOGGED,
        data: timestampMessage('Initializing game...')
      })

      return next(action)
    }

    case APP_STARTED.RECEIVE: {
      store.dispatch({
        type: EVENT_LOGGED,
        data: timestampMessage('Game ready')
      })
      return next(action)
    }

    case APP_STARTED.FAILURE: {
      store.dispatch({
        type: EVENT_LOGGED,
        data: timestampMessage('Failed to start game')
      })
      return next(action)
    }

    case MOVE_INITIATED.RECEIVE: {
      const { move } = action.variables
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

      store.dispatch({
        type: EVENT_LOGGED,
        data: timestampMessage(message)
      })

      next(action)

      const nextState = store.getState()

      if (nextState.chess.inCheckmate) {
        store.dispatch({
          type: EVENT_LOGGED,
          data: timestampMessage(`${colorsBySymbol.get(nextState.chess.turn)} is in checkmate`)
        })
      } else if (nextState.chess.inCheck) {
        store.dispatch({
          type: EVENT_LOGGED,
          data: timestampMessage(`${colorsBySymbol.get(nextState.chess.turn)} is in check`)
        })
      }

      return
    }

    default:
      break
  }

  next(action)
}
