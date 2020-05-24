import React from 'react'
import Square from './Square'

export default function Board({ board }) {
  const squares = []
  let dark = true

  for (const [file, ranks] of Object.entries(board)) {
    for (const [rank, piece] of ranks.entries()) {
      squares.push(
        <Square
          key={`${file}${rank}`}
          file={file.toUpperCase()}
          rank={rank + 1}
          piece={piece}
          dark={dark}/>
      )
      dark = !dark
    }
    dark = !dark
  }
  return <div className="chess-board">{squares}</div>
}
