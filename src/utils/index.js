import { piecesBySymbol } from '../constants/pieces'
import { colorsBySymbol } from '../constants/colors'

export function getPieceLabel(piece) {
  const colorName = colorsBySymbol.get(piece.color)
  const pieceName = piecesBySymbol.get(piece.type)
  return `${colorName} ${pieceName}`.toLowerCase()
}
