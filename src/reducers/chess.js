import {
  APP_STARTED,
  MOVE_INITIATED
} from '../constants/actions'

const initialState = null

const generateMovesBySquare = (state) => {
  return state.moves
    .reduce((result, nextMove) => {
      const movesForSquare = result[nextMove.from] || []
      return {
        ...result,
        [nextMove.from]: [...movesForSquare, nextMove]
      }
    }, {})
}

const generateSquares = (state) => {
  return state.board.reduce(
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

const mapChessDataToState = (state) => {
  const movesBySquare = generateMovesBySquare(state)
  const squares = generateSquares(state)

  return {
    ...state,
    squares,
    movesBySquare
  }
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case APP_STARTED.RECEIVE:
    case MOVE_INITIATED.RECEIVE: {
      return mapChessDataToState(action.data.chess)
    }

    default:
      return state
  }
}
