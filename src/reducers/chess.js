import {
  CHESS_AND_CONSTANTS,
  MOVE
} from '../constants'

function generateMovesBySquare(chess) {
  return chess.moves
    .reduce((result, nextMove) => {
      const movesForSquare = result[nextMove.from] || []
      return {
        ...result,
        [nextMove.from]: [...movesForSquare, nextMove]
      }
    }, {})
}

function generateSquares(chess) {
  return chess.board
    .reduce((list, { rank, squares }) => {
        const  squareData = squares
          .map(({ file, piece }, index) => {
            const dark = rank % 2 ? !(index % 2) : index % 2
            return { rank, file, piece, dark }
          })
        return list.concat(squareData)
      }, [])
}

function mapChessDataToState(chess) {
  const movesBySquare = generateMovesBySquare(chess)
  const squares = generateSquares(chess)

  return {
    ...chess,
    squares,
    movesBySquare
  }
}

export default function chess(state = null, action) {
  switch (action.type) {
    case CHESS_AND_CONSTANTS.RECEIVE:
    case MOVE.RECEIVE:
      return mapChessDataToState(action.data.chess)

    default:
      return state
  }
}
