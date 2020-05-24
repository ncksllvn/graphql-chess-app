import React from 'react'
import { useSelector } from 'react-redux'
import Square from './Square'

export default function Board() {
  const board = useSelector(state => state.chess?.board)

  if (!board) {
    return null
  }

  const squares = board.reduce(
    (list, { rank, squares }) => {
      let dark = !(rank % 2)
      return list.concat(
        squares.map(
          ({ file, piece }) => {
            dark = !dark
            return (
              <Square
                key={`${file}${rank}`}
                rank={rank}
                file={file}
                piece={piece}
                dark={dark}/>
            )
          }
        )
      )
    }
  , [])

  return <div className="chess-board">{squares.reverse()}</div>
}
