import React from 'react'
// import { useSelector } from 'react-redux'

export default function ChessBoardSquare({ file, rank, piece, dark }) {
  // const constants = useSelector(state => state.constants)
  const className = `chess-board-square ${
    dark ? 'chess-board-square--dark' : ''
  }`

  return (
    <button
      disabled={!piece}
      aria-label={`Rank ${rank}, file ${file}`}
      className={className}>
      {piece?.type}
    </button>
  )
}
