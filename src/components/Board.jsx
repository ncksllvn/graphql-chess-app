import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import {
  moveInitiated,
  pieceSelected
} from '../actions'

import {
  KEYS
} from '../constants'

import Square from './Square'

export default function Board() {
  const dispatch = useDispatch()
  const chess = useSelector(state => state.chess)
  const constants = useSelector(state => state.constants)
  const ui = useSelector(state => state.ui)

  if (!chess) {
    return null
  }

  const {
    piecesBySymbol,
    colorsBySymbol,
    pieceConstants
  } = constants

  const {
    selectedSquareId
  }  = ui

  const {
    fen,
    squares,
    movesBySquare,
    turn
  } = chess

  let selectedPieceMoves = null
  let selectedPieceTargetedSquareIds = null

  if (selectedSquareId) {
    selectedPieceMoves = movesBySquare[selectedSquareId]
    selectedPieceTargetedSquareIds = new Set(
      selectedPieceMoves.map(move => move.to)
    )
  }

  const classNames= ["chess-board"]

  if (colorsBySymbol[turn] === KEYS.BLACK) {
    classNames.push('chess-board--black-turn')
  }

  return (
    <div className={classNames.join(' ')}>
      {squares.map(({ rank, file, piece, dark }) => {
        const squareId = `${file}${rank}`

        let moves = null
        let typeName = null
        let colorName = null
        let isTargeted = false
        let isActive = false
        let onClick = null
        let ariaLabel = `${squareId} is empty`
        let pieceTitle = null

        if (piece) {
          typeName = piecesBySymbol[piece.type]
          colorName = colorsBySymbol[piece.color]
          pieceTitle = `${colorName} ${typeName}`.toLowerCase()
          moves = movesBySquare[squareId]
          ariaLabel = `${squareId} contains a ${pieceTitle}`

          if (moves?.length > 0) {
            onClick = () => dispatch(pieceSelected(squareId))
          }
        }

        if (selectedSquareId) {
          if (squareId === selectedSquareId) {
            isActive = true
            ariaLabel = `${squareId} contains a ${pieceTitle} selected for move.${' '
            } Use the tab keys to select a square to initiate move.${' '
            } Press again to cancel selection.`
          } else if (selectedPieceTargetedSquareIds?.has(squareId)) {
            isTargeted = true
            ariaLabel = `Move to ${squareId}`
            onClick = () => {
              let { from, to, promotion } = selectedPieceMoves
                .find(move => move.to === squareId)

              if (promotion) {
                promotion = pieceConstants[KEYS.QUEEN]
              }

              const move = { from, to, promotion }
              dispatch(moveInitiated(fen, move))
            }
          } else {
            // @todo Forcing onClick to null is helpful so that you can
            // tab to initiate moves, but it's confusing that you have
            // to unselect the active piece before selecting a new piece.
            // onClick = null
          }
        }

        const props = {
          key: squareId,
          dark,
          isActive,
          isTargeted,
          ariaLabel,
          piece: piece && { typeName, colorName },
          onClick
        }

        return (
          <Square {...props}/>
        )
      })}
    </div>
  )
}
