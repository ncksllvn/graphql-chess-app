const pieces = {
  PAWN: 'p',
  KNIGHT: 'n',
  BISHOP: 'b',
  ROOK: 'r',
  QUEEN: 'q',
  KING: 'k'
}

export const piecesBySymbol =  new Map(
  Object.entries(pieces).map(
    ([key, value]) => [value, key]
  )
)

export default pieces
