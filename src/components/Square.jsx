import React from 'react'
import Piece from './Piece'

export default function Square({ file, rank, dark, piece: pieceProps }) {
  const className = `chess-board-square ${
    dark ? 'chess-board-square--dark' : ''
  }`

  return (
    <div className={className}>
      <Piece file={file} rank={rank} {...pieceProps}/>
    </div>
  )
}
