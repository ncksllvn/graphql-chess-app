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

  if (isActive || isTargeted) {
    classNames.push('chess-board-square--destination')
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
