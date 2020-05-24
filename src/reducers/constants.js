import {
  CHESS_AND_CONSTANTS
} from '../constants'

export default function constants(state = null, action) {
  switch (action.type) {
    case CHESS_AND_CONSTANTS.RECEIVE: {
      const {
        pieceConstants,
        colorConstants
      } = action.data

      const piecesBySymbol = Object.entries(pieceConstants).reduce(
        (result, [typeName, symbol]) => {
          return {
            [symbol]: typeName,
            ...result
          }
        }
      , {})

      const colorsBySymbol = Object.entries(colorConstants).reduce(
        (result, [colorName, symbol]) => {
          return {
            [symbol]: colorName,
            ...result
          }
        }
      , {})

      return { piecesBySymbol, colorsBySymbol }
    }

    default:
      return state
  }
}
