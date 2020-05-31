import { piecesBySymbol } from './constants/pieces'
import { colorsBySymbol } from './constants/colors'

export function getSelectedSquare(state) {
  const { selectedSquareId } = state.ui

  if (!selectedSquareId) {
    return null
  }

  const square = state.chess.squares.find(
    (square) =>
      square.id === selectedSquareId
    )

  const typeName = piecesBySymbol.get(square.piece.type)
  const colorName = colorsBySymbol.get(square.piece.color)

  const moves = state.chess.movesBySquare[square.id]
  const targets = moves?.map(
      (move) => move.to
    )

  return {
    ...square,
    targets,
    piece: {
      ...square.piece,
      typeName,
      colorName
    }
  }
}
