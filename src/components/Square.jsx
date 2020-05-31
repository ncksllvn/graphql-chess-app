import React from 'react'

import PIECE_VISUALS from '../constants/visuals'

import { piecesBySymbol } from '../constants/pieces'
import COLORS, { colorsBySymbol } from '../constants/colors'

export default function Square({ squareId, piece, isDark, isActive, targetedBy, onClick }) {
  let symbol = null
  let ariaLabel = `${squareId} is empty`
  let classNames = ['chess-board-square']

  if (isDark) {
    classNames.push('chess-board-square--dark')
  }

  if (piece) {
    const colorName = colorsBySymbol.get(piece.color)
    const typeName = piecesBySymbol.get(piece.type)

    ariaLabel = `${squareId} contains a ${colorName} ${typeName}`
    symbol = PIECE_VISUALS[piece.type][piece.color]

    if (piece.color === COLORS.BLACK) {
      classNames.push('chess-board-square--black-piece')
    }

    if (isActive) {
      classNames.push('chess-board-square--active')
      ariaLabel =
        `${squareId} contains a ${colorName} ${typeName} selected for move.${' '
        } Use the tab keys to select a square to initiate move.${' '
        } Press again to cancel selection.`
    }
  }

  if (targetedBy) {
    classNames.push('chess-board-square--targeted')
    ariaLabel = `Move ${piecesBySymbol.get(targetedBy.piece.type)} on ${targetedBy.id} ${
      piece ? `to capture ${piecesBySymbol.get(piece.type)} on ${squareId}` : `to ${squareId}`
    }`
  }

  return (
    <button
      type="button"
      aria-label={ariaLabel}
      disabled={!onClick}
      className={classNames.join(' ')}
      onClick={() => onClick(squareId)}>
      {symbol}
    </button>
  )
}
