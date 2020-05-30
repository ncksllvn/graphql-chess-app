import {
  CHESS_AND_CONSTANTS,
  PIECE_SELECTED,
  MOVE
} from '../constants'

import {
  generateColorsBySymbol,
  generatePiecesBySymbol,
  mapChessDataToState
} from './utils'

const initialState = {
  appStatus: {
    loading: true
  },
  chess: null,
  constants: null,
  ui: {
    selectedSquareId: null
  }
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case CHESS_AND_CONSTANTS.REQUEST:
    case MOVE.REQUEST: {
      return {
        ...state,
        appStatus: { loading: true }
      }
    }

    case CHESS_AND_CONSTANTS.RECEIVE: {
      const {
        pieceConstants,
        colorConstants,
        flagConstants,
        chess
      } = action.data

      return {
        ...state,
        ui: { selectedSquareId: null },
        appStatus: { loading: false },
        chess: mapChessDataToState(chess),
        constants: {
          piecesBySymbol: generatePiecesBySymbol(pieceConstants),
          colorsBySymbol: generateColorsBySymbol(colorConstants),
          pieceConstants,
          colorConstants,
          flagConstants
        }
      }
    }

    case PIECE_SELECTED: {
      const selectedSquareId =
        action.squareId === state.ui.selectedSquareId ? null : action.squareId

      return {
        ...state,
        ui: { selectedSquareId }
      }
    }

    case MOVE.RECEIVE: {
      return {
        ...state,
        appStatus: { loading: false },
        ui: { selectedSquareId: null },
        chess: mapChessDataToState(action.data.chess)
      }
    }

    case CHESS_AND_CONSTANTS.FAILURE: {
      return {
        ...state,
        appStatus: { loading: false, errors: action.errors }
      }
    }

    default:
      return state
  }
}
