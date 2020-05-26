import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import {
  moveInitiated,
  pieceSelected
} from '../actions'

import Square from './Square'
// import Move from './Move'
import Piece from './Piece'

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
    colorsBySymbol
  } = constants

  const {
    selectedPiece
  }  = ui

  const {
    fen,
    squares,
    movesBySquare
  } = chess

  let movesForSelectedPiece = []

  if (selectedPiece) {
    movesForSelectedPiece = movesBySquare[selectedPiece.squareId]
  }

  return (
    <div className="chess-board">
      {squares.map(({ rank, file, piece, dark }) => {
        const squareId = `${file}${rank}`

        let moves = null
        let typeName = null
        let colorName = null
        let isActive = false
        let isTargeted = false
        let onClick = null
        let enabled = false

        if (piece) {
          typeName = piecesBySymbol[piece.type]
          colorName = colorsBySymbol[piece.color]
          moves = movesBySquare[squareId]

          if (moves?.length > 0) {
            enabled = true
            onClick = () => dispatch(pieceSelected({ squareId }))
          }
        }

        if (movesForSelectedPiece.length > 0) {
          isActive = (
            squareId === movesForSelectedPiece[0].from
          )

          const possibleMoveTargetingThisSquare =
            movesForSelectedPiece.find(move => move.to === squareId)

          if (possibleMoveTargetingThisSquare) {
            isTargeted = true
            onClick = () => dispatch(
              moveInitiated(fen, possibleMoveTargetingThisSquare)
            )
          }

        }

        const props = {
          key: squareId,
          dark,
          isActive,
          isTargeted,
          onClick
        }

        return (
          <Square {...props}>
            {piece && (
              <Piece typeName={typeName} colorName={colorName}/>
            )}
          </Square>
        )
      })}
    </div>
  )
}
