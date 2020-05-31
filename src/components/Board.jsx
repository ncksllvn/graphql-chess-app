import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {
  getSelectedSquare
} from '../selectors'

import PIECES from '../constants/pieces'
import COLORS from '../constants/colors'

import {
  pieceSelected as pieceSelectedAction,
  moveInitiated as moveInitiatedAction
} from '../actions'

import Square from './Square'

export default function Board() {
  const dispatch = useDispatch()

  const chess = useSelector(state => state.chess)
  const selectedSquare = useSelector(getSelectedSquare)

  const pieceSelected = useCallback(
    (squareId) =>
      dispatch(
        pieceSelectedAction(squareId)
      )
    , [dispatch]
  )

  const moveInitiated = useCallback(
    (squareId) => {
      let { from, to, promotion } = chess.moves
        .filter(
          (move) => move.from === selectedSquare.id
        ).find(
          (move) => move.to === squareId
        )

      if (promotion) {
        promotion = PIECES.QUEEN
      }

      dispatch(
        moveInitiatedAction(chess.fen, { from, to, promotion })
      )
    }, [dispatch, chess, selectedSquare]
  )

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

        const isTargeted = (
          selectedSquare?.targets?.includes(squareId)
        )

        const targetedBy = (
          isTargeted ? selectedSquare : null
        )

        const onClick = isTargeted ? moveInitiated : (
          piece ? pieceSelected : null
        )

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
