import {
  CALL_API,
  CHESS_AND_CONSTANTS
} from '../constants'

import {
  GET_CONSTANTS_AND_CHESS
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

export function pieceSelected() {
  return {}
}
