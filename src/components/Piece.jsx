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

export default function Piece({ squareId, type, color }) {
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
  let NodeType = 'button'
  let onClick = null
  let enabled = false
  let ariaLabel = `${squareId.toUpperCase()} contains a ${colorName} ${typeName}`

  if (colorName === USER_COLOR) {
    moves = movesBySquare[squareId]
    if (moves?.length > 0) {
      enabled = true
      onClick = () => dispatch(pieceSelected({ squareId, moves }))
      ariaLabel = `Move ${typeName} on ${squareId.toUpperCase()}`
    }
  } else {
    NodeType = 'span'
  }

  const visual = PIECE_VISUALS[typeName][colorName]
  const className = `chess-board-piece${
    colorName === BLACK ? ' chess-board-piece--black' : ''
  }`

  return (
    <NodeType
      className={className}
      aria-label={ariaLabel}
      disabled={!enabled}
      onClick={onClick}>
      {visual}
    </NodeType>
  )
}
