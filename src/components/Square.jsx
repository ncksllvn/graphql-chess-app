import React from 'react'
import Piece from './Piece'

export default function Square({ squareId, piece, isDark, isActive, targetedBy, onClick }) {
  let ariaLabel = `${squareId} is empty`
  let classNames = ['chess-board-square']

  if (isDark) {
    classNames.push('chess-board-square--dark')
  }

  if (piece) {
    ariaLabel = `${squareId} contains a ${piece.colorName} ${piece.typeName}`
  }

  if (isActive) {
    classNames.push('chess-board-square--active')
    ariaLabel =
      `${squareId} contains a ${piece.colorName} ${piece.typeName} selected for move.${' '
      } Use the tab keys to select a square to initiate move.${' '
      } Press again to cancel selection.`
  }

  if (targetedBy) {
    classNames.push('chess-board-square--targeted')
    ariaLabel = `Move ${targetedBy.piece.typeName} on ${targetedBy.id} ${
      piece ? `to capture ${piece.typeName} on ${squareId}` : `to ${squareId}`
    }`
  }

  return (
    <button
      type="button"
      aria-label={ariaLabel}
      disabled={!onClick}
      className={classNames.join(' ')}
      onClick={() => onClick(squareId)}>
      {piece && (
        <Piece
          typeName={piece.typeName}
          colorName={piece.colorName}/>
      )}
    </button>
  )
}
