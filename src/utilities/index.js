export function mapChessDataToState(chess) {
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
