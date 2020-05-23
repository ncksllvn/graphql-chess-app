import {
  CHESS_AND_CONSTANTS
} from '../constants'

export default function appStatus(state =  { loading: true }, action) {
  switch (action.type) {
    case CHESS_AND_CONSTANTS.RECEIVE:
      return { loading: false }

    case CHESS_AND_CONSTANTS.FAILURE:
      return { errors: action.errors }

    case CHESS_AND_CONSTANTS.REQUEST:
    default:
      return state
  }
}
