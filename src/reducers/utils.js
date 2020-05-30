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