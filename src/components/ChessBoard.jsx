import React from 'react'
import ChessBoardSquare from './ChessBoardSquare'

export default function ChessBoard({ board }) {
  const squares = []
  let dark = true

  for (const [file, ranks] of Object.entries(board)) {
    for (const [rank, piece] of ranks.entries()) {
      squares.push(
        <ChessBoardSquare
          key={`${file}${rank}`}
          file={file}
          rank={rank}
          piece={piece}
          dark={dark}/>
      )
      dark = !dark
    }
    dark = !dark
  }
  return <div className="chess-board">{squares}</div>
}
