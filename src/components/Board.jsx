import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {
  selectActiveSquare,
  selectChess
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

  const dispatch = useDispatch()
  const pieceSelected = usePieceSelected(dispatch)
  const moveInitiated = useMoveInitiated(dispatch, chess, selectedSquare)

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

        const isTurn = (
          chess.turn == USER_COLOR
        )

        const isTargeted = (
          selectedSquare?.targets?.includes(squareId)
        )

        const targetedBy = (
          isTargeted ? selectedSquare : null
        )

        const onClick = isTurn ? (
          isTargeted ? moveInitiated : (
              piece ? pieceSelected : null
            )
          ) : null

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
