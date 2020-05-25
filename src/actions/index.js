import {
  CALL_API,
  CHESS_AND_CONSTANTS,
  PIECE_SELECTED,
  MOVE
} from '../constants'

import {
  GET_CONSTANTS_AND_CHESS,
  MAKE_MOVE
} from '../graphql'

export function startApp() {
  return {
    [CALL_API]: {
      query: GET_CONSTANTS_AND_CHESS,
      types: [
        CHESS_AND_CONSTANTS.REQUEST,
        CHESS_AND_CONSTANTS.RECEIVE,
        CHESS_AND_CONSTANTS.FAILURE
      ]
    }
  }
}

export function pieceSelected(piece) {
  return { type: PIECE_SELECTED, piece }
}

export function moveInitiated(fen, { from, to }) {
  return {
    [CALL_API]: {
      query: MAKE_MOVE,
      variables: {
        fen,
        move: { from, to }
      },
      types: [
        MOVE.REQUEST,
        MOVE.RECEIVE,
        MOVE.FAILURE
      ]
    }
  }
}
