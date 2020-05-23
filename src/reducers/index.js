import { combineReducers } from 'redux'

import {
  CHESS_AND_CONSTANTS
} from '../constants'

import {
  mapChessDataToState
} from '../utilities'

const initialState = {
  appStatus: { loading: true },
  chess: null,
  constants: null
}

function appStatus(state = initialState.appStatus, action) {
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

function chess(state = initialState.chess, action) {
  switch (action.type) {
    case CHESS_AND_CONSTANTS.RECEIVE:
      return mapChessDataToState(action.data.chess)

    default:
      return state
  }
}

function constants(state = initialState.constants, action) {
  switch (action.type) {
    case CHESS_AND_CONSTANTS.RECEIVE: {
      const {
        pieceConstants: pieceTypes,
        colorConstants: colors
      } = action.data

      return { pieceTypes, colors }
    }

    default:
      return state
  }
}

export default combineReducers({
  appStatus, chess, constants
})
