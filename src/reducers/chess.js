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

  const squares = chess.board
    // Sort from Rank 8 to Rank 1 descending so
    // that A1 the bottom-left corner of the user view.
    .sort(( row1, row2 ) => row2.rank - row1.rank)
    .reduce((list, { rank, squares }) => {
        const  squareData = squares
          .map(({ file, piece }, index) => {
            const dark = rank % 2 ? !(index % 2) : index % 2
            return { rank, file, piece, dark }
          })
        return list.concat(squareData)
      }, [])

  return {
    ...chess,
    squares,
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
