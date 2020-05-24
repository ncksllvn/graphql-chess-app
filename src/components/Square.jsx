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
    const thisSquareContainsSelectedPiece = (coords === moves[0].from)
    const selectedPieceCanMoveToThisSquare = moves.some(move => move.to === coords)
    if (thisSquareContainsSelectedPiece || selectedPieceCanMoveToThisSquare) {
      className += ' chess-board-square--destination'
    }

    if (selectedPieceCanMoveToThisSquare) {
      NodeType = 'button'
    }
  }

  return (
    <NodeType className={className}>
      <Piece squareId={coords} {...pieceProps}/>
    </NodeType>
  )
}
