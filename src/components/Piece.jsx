import React from 'react'
import { useSelector } from 'react-redux'

import {
  PIECE_SYMBOLS
} from '../constants'

export default function Piece({ type, color } = {}) {
  const {
    pieceTypes,
    colors
  } = useSelector(state => state.constants)

  if (!type) {
    return null
  }

  const [typeName] = Object.entries(pieceTypes).find(
    ([_typeName, symbol]) => type === symbol
    )

  const [colorName] = Object.entries(colors).find(
    ([_colorName, symbol]) => color === symbol
  )

  return (
    <button
      aria-label={`${colorName} ${typeName}`}>
      {PIECE_SYMBOLS[typeName][colorName]}
    </button>
  )
}
