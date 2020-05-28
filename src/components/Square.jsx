import React from 'react'
import Piece from './Piece'

export default function Square({
  dark,
  isActive,
  isTargeted,
  onClick,
  ariaLabel,
  piece
}) {

  let classNames = ['chess-board-square']

  if (dark) {
    classNames.push('chess-board-square--dark')
  }

  if (isTargeted) {
    classNames.push('chess-board-square--targeted')
  }

  if (isActive) {
    classNames.push('chess-board-square--active')
  }

  return (
    <button
      type="button"
      aria-label={ariaLabel}
      disabled={!onClick}
      className={classNames.join(' ')}
      onClick={onClick}>
      {piece && (
        <Piece
          typeName={piece.typeName}
          colorName={piece.colorName}/>
      )}
    </button>
  )
}
