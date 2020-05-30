import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { KEYS } from '../constants'

import {
  pieceSelected as pieceSelectedAction,
  moveInitiated as moveInitiatedAction
} from '../actions'

import Square from './Square'

export default function Board() {
  const dispatch = useDispatch()

  const chess = useSelector(state => state.chess)
  const constants = useSelector(state => state.constants)
  const ui = useSelector(state => state.ui)

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
          (move) => move.from === ui.selectedSquareId
        ).find(
          (move) => move.to === squareId
        )

      if (promotion) {
        promotion = constants.pieceConstants[KEYS.QUEEN]
      }

      dispatch(
        moveInitiatedAction(chess.fen, { from, to, promotion })
      )
    }, [dispatch, chess, constants, ui]
  )

  if (!chess) {
    return <div className="chess-board--loading"/>
  }

  let selection = null

  if (ui.selectedSquareId) {
    const { id, piece } = chess.squares.find(
      (square) =>
        square.id === ui.selectedSquareId
    )

    const typeName = constants.piecesBySymbol[piece.type]
    const colorName = constants.colorsBySymbol[piece.color]
    const moves = chess.movesBySquare[ui.selectedSquareId]
    const targets = new Set(
      moves?.map(
        (move) => move.to
      )
    )

    selection = {
      square: { id, piece: { ...piece, colorName, typeName }},
      targets
    }
  }

  const classNames= ['chess-board']

  if (constants.colorsBySymbol[chess.turn] === KEYS.BLACK) {
    classNames.push('chess-board--black-turn')
  }

  return (
    <div className={classNames.join(' ')}>
      {chess.squares.map(({ id: squareId, piece, isDark }) => {
        const isActive = (
          squareId === selection?.square.id
        )
        const isTargeted = (
          selection?.targets.has(squareId)
        )
        const targetedBy = (
          isTargeted ? selection.square : null
        )
        const onClick = isTargeted ? moveInitiated : (
          piece ? pieceSelected : null
        )
        const pieceExpanded = piece && {
          typeName: constants.piecesBySymbol[piece.type],
          colorName: constants.colorsBySymbol[piece.color],
          ...piece
        }

        return (
          <Square
            key={squareId}
            piece={pieceExpanded}
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
