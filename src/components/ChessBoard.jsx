import React from 'react'

export default function ChessBoard({ board }) {
  const squares = []
  for (const [row, columns] of Object.entries(board)) {
    for (const [index, piece] of columns.entries()) {
      const square = `${row}${index}`
      squares.push(
        <button data-square={square} className="chess-board-square">
          {piece?.type}
        </button>
      )
    }
  }
  return <div class="chess-board">{squares}</div>
}
