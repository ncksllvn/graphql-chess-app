import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import {
  PIECE_VISUALS,
  KEYS,
  USER_COLOR
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

  const typeName = piecesBySymbol[type]
  const colorName = colorsBySymbol[color]

  let moves = null

  if (colorName === USER_COLOR) {
    moves = movesBySquare[`${file}${rank}`]
  }

  const visual = PIECE_VISUALS[typeName][colorName]
  const ariaLabel = `${colorName} ${typeName} on ${file.toUpperCase()} ${rank}`
  const className = `chess-board-piece${
    colorName === BLACK ? ' chess-board-piece--black' : ''
  }`

  const enabled = (
    moves?.length > 0
  )

  const onClick = () => console.log(moves)

  return (
    <button
      className={className}
      aria-label={ariaLabel}
      disabled={!enabled}
      onClick={onClick}>
      {visual}
    </button>
  )
}
