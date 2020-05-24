import React from 'react'
import { useSelector } from 'react-redux'

import {
  PIECE_SYMBOLS,
  KEYS
} from '../constants'

const {
  BLACK
} = KEYS

export default function Piece({ file, rank, type, color }) {
  const {
    piecesBySymbol,
    colorsBySymbol
  } = useSelector(state => state.constants)

  if (!type) {
    return null
  }

  const typeName = piecesBySymbol[type]
  const colorName = colorsBySymbol[color]
  const className = `chess-board-piece ${
    colorName === BLACK ? 'chess-board-piece--black' : ''
  }`

  return (
    <button
      className={className}
      aria-label={`${colorName} ${typeName} on ${file} ${rank}`}>
      {PIECE_SYMBOLS[typeName][colorName]}
    </button>
  )
}
