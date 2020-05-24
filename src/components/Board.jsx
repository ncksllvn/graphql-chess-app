import React from 'react'
import Square from './Square'

export default function Board({ board }) {
  const squares = []

  let dark = true
  let rank = 8
  const files = 'abcdefgh'

  for (const row of Object.values(board)) {
    for (const [colIndex, piece] of row.entries()) {
      squares.push(
        <Square
          key={squares.length}
          rank={rank}
          file={files[colIndex]}
          piece={piece}
          dark={dark}/>
      )
      dark = !dark
    }
    rank--
    dark = !dark
  }
  return <div className="chess-board">{squares}</div>
}
