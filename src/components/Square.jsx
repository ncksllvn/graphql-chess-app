import React from 'react'
import { useDispatch } from 'react-redux'

import {
  KEYS
} from '../constants'

import {
  moveInitiated,
  pieceSelected
} from '../actions'

import Piece from './Piece'

export default function Square({
  squareId,
  dark,
  piece,
  selected,
  moves,
  pieceConstants,
  fen
}) {
  const dispatch = useDispatch()

  let ariaLabel = `${squareId} is empty`
  let onClick = null
  let isActive = false
  let isTargeted = false

  if (piece) {
    ariaLabel = `${squareId} contains a ${piece.colorName} ${piece.typeName}`
    if (moves?.length > 0) {
      onClick = () => dispatch(pieceSelected(squareId))
    }
  }

  if (selected) {
    isActive = squareId === selected.squareId
    isTargeted = selected.moves.some(move => move.to === squareId)

    if (isActive) {
      isActive = true
      ariaLabel =
        `${squareId} contains a ${piece.colorName} ${piece.typeName} selected for move.${' '
        } Use the tab keys to select a square to initiate move.${' '
        } Press again to cancel selection.`
    }

    if (isTargeted) {
      ariaLabel = `Move ${selected.piece.typeName} on ${selected.squareId} ${
        piece ? `to capture ${piece.typeName} on ${squareId}` : `to ${squareId}`
      }`

      onClick = () => {
        let { from, to, promotion } =
          selected.moves.find(move => move.to === squareId)

        if (promotion) {
          promotion = pieceConstants[KEYS.QUEEN]
        }

        const move = { from, to, promotion }
        dispatch(moveInitiated(fen, move))
      }
    }
  }

  let classNames = ['chess-board-square']

  if (dark) {
    classNames.push('chess-board-square--dark')
  }

  if (isTargeted) {
    classNames.push('chess-board-square--targeted')
  }

  if (isActive) {
    classNames.push('chess-board-square--active')
  }

  return (
    <button
      type="button"
      aria-label={ariaLabel}
      disabled={!onClick}
      className={classNames.join(' ')}
      onClick={onClick}>
      {piece && (
        <Piece
          typeName={piece.typeName}
          colorName={piece.colorName}/>
      )}
    </button>
  )
}
