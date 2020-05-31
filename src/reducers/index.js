import {
  CHESS_AND_CONSTANTS,
  PIECE_SELECTED,
  MOVE
} from '../constants'

import {
  generateColorsBySymbol,
  generatePiecesBySymbol,
  mapChessDataToState,
  generateSelectedSquare,
  addMoveToLog,
  timestamped
} from './utils'

const initialState = {
  appStatus: {
    loading: true
  },
  chess: null,
  constants: null,
  ui: {
    selectedSquare: null
  },
  log: [
    timestamped('game starting...')
  ]
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case CHESS_AND_CONSTANTS.REQUEST: {
      return {
        ...state,
        appStatus: { loading: true }
      }
    }

    case MOVE.REQUEST: {
      return {
        ...state,
        log: addMoveToLog(state, action.data.variables.move)
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
        ui: { selectedSquare: null },
        appStatus: { loading: false },
        chess: mapChessDataToState(chess),
        constants: {
          piecesBySymbol: generatePiecesBySymbol(pieceConstants),
          colorsBySymbol: generateColorsBySymbol(colorConstants),
          pieceConstants,
          colorConstants,
          flagConstants
        },
        log: [
          ...state.log,
          timestamped('game ready')
        ]
      }
    }

    case PIECE_SELECTED: {
      return {
        ...state,
        ui: generateSelectedSquare(state, action.squareId)
      }
    }

    case MOVE.RECEIVE: {
      return {
        ...state,
        appStatus: { loading: false },
        ui: { selectedSquare: null },
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
