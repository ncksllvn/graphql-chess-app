import {
  CHESS_AND_CONSTANTS,
  MOVE
} from '../constants'

const initialState = {
  loading: true
}

export default function appStatus(state = initialState, action) {
  switch (action.type) {
    case CHESS_AND_CONSTANTS.REQUEST:
    case MOVE.REQUEST:
      return { loading: true }

    case MOVE.RECEIVE:
    case CHESS_AND_CONSTANTS.RECEIVE:
      return { loading: false }

    case CHESS_AND_CONSTANTS.FAILURE:
      return { loading: false, errors: action.errors }

    default:
      return state
  }
}
