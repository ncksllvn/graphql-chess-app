import React from 'react'
import { useSelector } from 'react-redux'

export default function ChessBoardSquare({ file, rank, piece, dark }) {
  const constants = useSelector(state => state.constants)
  const className = `chess-board-square ${
    dark ? 'chess-board-square--dark' : ''
  }`

  let description = `File ${file.toUpperCase()}, Rank ${rank + 1}`

  if (piece) {
    let [typeName] = Object
      .entries(constants.pieceTypes)
      .find(([_typeName, type]) => {
        return type === piece.type
      })

    description = `${description} has a ${typeName}`
  } else {
    description = `${description} is empty`
  }

  return (
    <button
      disabled={!piece}
      aria-label={description}
      className={className}>
      {piece?.type}
    </button>
  )
}
