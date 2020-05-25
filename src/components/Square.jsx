import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { moveInitiated } from '../actions'
import Piece from './Piece'

export default function Square({ file, rank, dark, piece: pieceProps }) {
  const {
    fen,
    movesBySquare
  } = useSelector(state => state.chess)

  const {
    selectedPiece
  } = useSelector(state => state.ui)

  const dispatch = useDispatch()

  let NodeType = 'div'
  let className = `chess-board-square ${
    dark ? 'chess-board-square--dark' : ''
  }`
  let otherProps = {}

  const squareId = `${file}${rank}`

  if (selectedPiece) {
    const moves = movesBySquare[selectedPiece.squareId]
    const thisSquareContainsSelectedPiece = (
      squareId === moves[0].from
    )

    const moveThatTargetsThisSquare = moves.find(
      move => move.to === squareId
    )

    if (moveThatTargetsThisSquare || thisSquareContainsSelectedPiece) {
      className += ' chess-board-square--destination'
    }

    if (moveThatTargetsThisSquare) {
      NodeType = 'button'
      otherProps.onClick = () =>
        dispatch(moveInitiated(fen, moveThatTargetsThisSquare)
      )
    }
  }

  return (
    <NodeType className={className} {...otherProps}>
      <Piece squareId={squareId} {...pieceProps}/>
    </NodeType>
  )
}
