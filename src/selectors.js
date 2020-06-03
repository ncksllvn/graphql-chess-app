export function selectAppStatus(state) {
  return state.appStatus
}

export function selectChess(state) {
  return state.chess
}

export function selectGameLog(state) {
  return state.gameLog
}

export function selectUI(state) {
  return state.ui
}

export function selectActiveSquare(state) {
  const { selectedSquareId } = state.ui

  if (!selectedSquareId) {
    return null
  }

  const square = state.chess.squares.find(
    (square) =>
      square.id === selectedSquareId
    )

  const moves = state.chess.movesBySquare[square.id]
  const targets = moves?.map(
      (move) => move.to
    )

  return {
    ...square,
    targets
  }
}
