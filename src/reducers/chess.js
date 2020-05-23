import {
  CHESS_AND_CONSTANTS
} from '../constants'

function mapChessDataToState(chess) {
  const movesBySquare = chess.moves
    .reduce((result, nextMove) => {
      const movesForSquare = result[nextMove.from] || []
      return {
        ...result,
        [nextMove.from]: [...movesForSquare, nextMove]
      }
    }, {})

  return {
    ...chess,
    movesBySquare
  }
}

export default function chess(state = null, action) {
  switch (action.type) {
    case CHESS_AND_CONSTANTS.RECEIVE:
      return mapChessDataToState(action.data.chess)

    default:
      return state
  }
}
