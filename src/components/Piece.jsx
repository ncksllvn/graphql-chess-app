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

  const dispatch = useDispatch()

  if (!type) {
    return null
  }

  const typeName = piecesBySymbol[type]
  const colorName = colorsBySymbol[color]

  let moves = null
  let ariaLabel = null

  const coords = `${file.toUpperCase()} ${rank}`

  if (colorName === USER_COLOR) {
    moves = movesBySquare[`${file}${rank}`]
    ariaLabel = `Move ${typeName} on ${coords}`
  } else {
    ariaLabel = `${coords} contains a ${colorName} ${typeName}`
  }

  const visual = PIECE_VISUALS[typeName][colorName]
  const className = `chess-board-piece${
    colorName === BLACK ? ' chess-board-piece--black' : ''
  }`

  const enabled = (
    moves?.length > 0
  )

  const onClick = () => dispatch(pieceSelected({ file, rank, moves }))

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
