export function generatePiecesBySymbol(pieceConstants) {
  return Object.entries(pieceConstants).reduce(
    (result, [typeName, symbol]) => {
      return {
        [symbol]: typeName,
        ...result
      }
    }
  , {})
}

export function generateColorsBySymbol(colorConstants) {
  return Object.entries(colorConstants).reduce(
    (result, [colorName, symbol]) => {
      return {
        [symbol]: colorName,
        ...result
      }
    }
  , {})
}

export function generateMovesBySquare(chess) {
  return chess.moves
    .reduce((result, nextMove) => {
      const movesForSquare = result[nextMove.from] || []
      return {
        ...result,
        [nextMove.from]: [...movesForSquare, nextMove]
      }
    }, {})
}

export function generateSquares(chess) {
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

export function mapChessDataToState(chess) {
  const movesBySquare = generateMovesBySquare(chess)
  const squares = generateSquares(chess)

  return {
    ...chess,
    squares,
    movesBySquare
  }
}

export function generateSelectedSquare(state, selectedSquareId) {
  const canceled = (
    selectedSquareId === state.ui.selectedSquare?.id
  )

  if (canceled) {
    return {
      ...state,
      ui: { selectedSquareId: null }
    }
  }

  const square = state.chess.squares.find(
    (square) =>
      square.id === selectedSquareId
    )

  const typeName = state.constants.piecesBySymbol[square.piece.type]
  const colorName = state.constants.colorsBySymbol[square.piece.color]

  const moves = state.chess.movesBySquare[square.id]
  const targets = moves?.map(
      (move) => move.to
    )

  const selectedSquare = {
    ...square,
    targets,
    piece: {
      ...square.piece,
      typeName,
      colorName
    }
  }

  return {
    selectedSquare
  }
}

export function updateLog(state, move) {
  const from = state.chess.squares.find(
      (square) => square.id === move.from
    )

  const to = state.chess.squares.find(
      (square) => square.id === move.to
    )

  const {
    piecesBySymbol,
    colorsBySymbol
  } = state.constants

  const pieceTitle = (piece) => (
    `${colorsBySymbol[piece.color]} ${piecesBySymbol[piece.type]}`.toLowerCase()
  )

  let message = `${pieceTitle(from.piece)} moves from ${from.id} to ${to.id}`

  if (to.piece) {
    message = `${message} to capture ${pieceTitle(to.piece)}`
  }

  return [
    ...state.log,
    message
  ]
}
