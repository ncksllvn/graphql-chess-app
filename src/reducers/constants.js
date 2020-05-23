import {
  CHESS_AND_CONSTANTS
} from '../constants'

export default function constants(state = null, action) {
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
