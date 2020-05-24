import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Piece from './Piece'

export default function Square({ file, rank, dark, piece: pieceProps }) {
  const { selectedPiece } = useSelector(state => state.ui)

  let NodeType = 'div'
  let className = `chess-board-square ${
    dark ? 'chess-board-square--dark' : ''
  }`

  const coords = `${file}${rank}`

  if (selectedPiece) {
    const { moves } = selectedPiece
    const selectedPieceCanMoveToThisSquare = moves.some(move => move.to === coords)
    if (selectedPieceCanMoveToThisSquare) {
      NodeType = 'button'
      className += ' chess-board-square--destination'
    }
  }

  return (
    <NodeType className={className}>
      <Piece file={file} rank={rank} {...pieceProps}/>
    </NodeType>
  )
}
