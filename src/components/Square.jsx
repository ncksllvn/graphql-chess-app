import React from 'react'

export default function Square({
  dark,
  isActive,
  isTargeted,
  onClick,
  children
}) {

  let classNames = ['chess-board-square']

  if (dark) {
    classNames.push('chess-board-square--dark')
  }

  if (isTargeted) {
    classNames.push('chess-board-square--destination')
  }

  if (isActive) {
    classNames.push('chess-board-square--active')
  }

  return (
    <button
      disabled={!onClick}
      className={classNames.join(' ')}
      onClick={onClick}>
      {children}
    </button>
  )
}
