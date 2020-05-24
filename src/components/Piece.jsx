import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import {
  PIECE_SYMBOLS,
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

  return (
    <button
      data-square={`${file}${rank}`}
      disabled={moves?.length === 0}
      onClick={() => console.log(moves)}
      className={className}
      aria-label={`${colorName} ${typeName} on ${file.toUpperCase()} ${rank}`}>
      {PIECE_SYMBOLS[typeName][colorName]}
    </button>
  )
}
