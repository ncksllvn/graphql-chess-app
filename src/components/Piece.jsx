import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import {
  PIECE_VISUALS,
  KEYS
} from '../constants'

import {
  pieceSelected
} from '../actions'

const {
  BLACK
} = KEYS

export default function Piece({ file, rank, type, color }) {
  const {
    piecesBySymbol,
    colorsBySymbol
  } = useSelector(state => state.constants)

  const {
    movesBySquare
  } = useSelector(state => state.chess)

  if (!type) {
    return null
  }

  const moves = movesBySquare[`${file}${rank}`]
  const typeName = piecesBySymbol[type]
  const colorName = colorsBySymbol[color]

  const className = `chess-board-piece${
    colorName === BLACK ? ' chess-board-piece--black' : ''
  }`

  const ariaLabel = `${colorName} ${typeName} on ${file.toUpperCase()} ${rank}`
  const disabled = moves?.length === 0
  const onClick = () => console.log(moves)
  const piece = PIECE_VISUALS[typeName][colorName]

  return (
    <button
      className={className}
      aria-label={ariaLabel}
      disabled={disabled}
      onClick={onClick}>
      {piece}
    </button>
  )
}
