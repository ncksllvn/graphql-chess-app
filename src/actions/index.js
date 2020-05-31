import {
  CALL_API,
  APP_STARTED,
  PIECE_SELECTED,
  MOVE_INITIATED
} from '../constants/actions'

import {
  GET_CHESS,
  MAKE_MOVE
} from '../graphql'

export function startApp() {
  return {
    [CALL_API]: {
      query: GET_CHESS,
      types: [
        APP_STARTED.REQUEST,
        APP_STARTED.RECEIVE,
        APP_STARTED.FAILURE
      ]
    }
  }
}

export function pieceSelected(squareId) {
  return { type: PIECE_SELECTED, squareId }
}

export function moveInitiated(fen, move) {
  return {
    [CALL_API]: {
      query: MAKE_MOVE,
      variables: {
        fen,
        move
      },
      types: [
        MOVE_INITIATED.REQUEST,
        MOVE_INITIATED.RECEIVE,
        MOVE_INITIATED.FAILURE
      ]
    }
  }
}
