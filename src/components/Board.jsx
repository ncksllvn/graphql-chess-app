import React from 'react'
import { useSelector } from 'react-redux'
import Square from './Square'

export default function Board() {
  const squares = useSelector(state => state.chess?.squares)

  if (!squares) {
    return null
  }

  return (
    <div className="chess-board">
      {squares.map((square, index) =>
        <Square key={index} {...square}/>
      )}
    </div>
  )
}
