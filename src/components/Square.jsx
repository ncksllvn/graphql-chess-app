import React from 'react'

export default function Square({
  dark,
  isActive,
  isTargeted,
  onClick,
  ariaLabel,
  children
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
      aria-label={ariaLabel}
      disabled={!onClick}
      className={classNames.join(' ')}
      onClick={onClick}>
      {children}
    </button>
  )
}
