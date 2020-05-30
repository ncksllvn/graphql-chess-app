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
  return chess.board.reduce(
      (list, row) => {
        const mappedRow = row.squares.map(
          (square, index) => ({
            piece: square.piece,
            id: `${square.file}${row.rank}`,
            isDark: row.rank % 2 ? !(index % 2) : index % 2
          })
        )
        return [ ...list, ...mappedRow ]
      },
    [])
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
