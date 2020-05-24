import React from 'react'
import Piece from './Piece'

export default function ChessBoardSquare({ file, rank, dark, piece: pieceProps }) {
  const className = `chess-board-square ${
    dark ? 'chess-board-square--dark' : ''
  }`

  const coords = `${file.toUpperCase()},${rank + 1}`

  return (
    <div aria-label={coords} className={className}>
      <Piece {...pieceProps}/>
    </div>
  )
}
