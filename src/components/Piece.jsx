import React from 'react'

import {
  PIECE_VISUALS,
  KEYS
} from '../constants'

const {
  BLACK
} = KEYS

export default function Piece({ typeName, colorName }) {
  const visual = PIECE_VISUALS[typeName][colorName]
  const className = `chess-board-piece${
    colorName === BLACK ? ' chess-board-piece--black' : ''
  }`

  return (
    <span role="presentation" className={className}>{visual}</span>
  )
}
