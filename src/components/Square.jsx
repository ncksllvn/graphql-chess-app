import React from 'react'

import PIECE_VISUALS from '../constants/visuals'

import { piecesBySymbol } from '../constants/pieces'
import COLORS, { colorsBySymbol } from '../constants/colors'

function getPieceLabel(piece) {
  const colorName = colorsBySymbol.get(piece.color)
  const pieceName = piecesBySymbol.get(piece.type)
  return `${colorName} ${pieceName}`.toLowerCase()
}

function Square({ squareId, piece, isDark, isActive, targetedBy, onClick }) {
  let symbol = null
  let ariaLabel = `${squareId} is empty`
  let classNames = ['chess-board-square', `chess-board-square--${squareId}`]

  if (isDark) {
    classNames.push('chess-board-square--dark')
  }

  if (onClick) {
    classNames.push('chess-board-square--clickable')
  }

  if (piece) {
    symbol = PIECE_VISUALS[piece.type][piece.color]
    ariaLabel = `${squareId} contains a ${getPieceLabel(piece)}`

    if (piece.color === COLORS.BLACK) {
      classNames.push('chess-board-square--black-piece')
    }
  }

  if (isActive) {
    classNames.push('chess-board-square--active')
    ariaLabel =
      `${squareId} contains a ${getPieceLabel(piece)} selected for move.${' '
      } Use the tab keys to select a square to initiate move.${' '
      } Press again to cancel selection.`
  }

  if (targetedBy) {
    classNames.push('chess-board-square--targeted')
    ariaLabel =
      `Move ${getPieceLabel(targetedBy.piece)} on ${targetedBy.id} ${
      piece ? `to capture ${getPieceLabel(piece)} on ${squareId}` : `to ${squareId}`
    }`
  }

  return (
    <button
      type="button"
      data-testid={squareId}
      aria-label={ariaLabel}
      aria-pressed={isActive}
      disabled={!onClick}
      className={classNames.join(' ')}
      onClick={onClick ? () => onClick(squareId) : null}>
      {symbol}
    </button>
  )
}

export default React.memo(Square)
