import React from 'react'
import { useSelector } from 'react-redux'

import {
  selectChess,
  selectActiveSquare
} from '../selectors'

import COLORS, {
  USER_COLOR
} from '../constants/colors'

import usePieceSelected from '../hooks/usePieceSelected'
import useMoveInitiated from '../hooks/useMoveInitiated'

import Square from './Square'

export default function Board() {
  const chess = useSelector(selectChess)
  const selectedSquare = useSelector(selectActiveSquare)
  const pieceSelected = usePieceSelected()
  const moveInitiated = useMoveInitiated()

  if (!chess) {
    return <div className="chess-board--loading"/>
  }

  const classNames= ['chess-board']

  if (chess.turn === COLORS.BLACK) {
    classNames.push('chess-board--black-turn')
  }

  return (
    <div className={classNames.join(' ')}>
      {chess.squares.map(({ id: squareId, piece, isDark }) => {
        const isActive = (
          squareId === selectedSquare?.id
        )

        const isPlayerTurn = (
          chess.turn === USER_COLOR
        )

        const isTargeted = (
          selectedSquare?.targets?.includes(squareId)
        )

        const targetedBy = (
          isTargeted ? selectedSquare : null
        )

        let onClick = null

        if (isPlayerTurn) {
          if (isTargeted) {
            onClick = (squareId) => moveInitiated(chess, selectedSquare.id, squareId)
          } else if (piece?.color === USER_COLOR) {
            onClick = (squareId) => pieceSelected(squareId)
          }
        }

        return (
          <Square
            key={squareId}
            piece={piece}
            squareId={squareId}
            isDark={isDark}
            isActive={isActive}
            targetedBy={targetedBy}
            onClick={onClick}/>
        )
      })}
    </div>
  )
}
