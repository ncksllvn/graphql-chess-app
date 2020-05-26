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
  let targets = null
  let moveInitiator = null

  if (selectedPiece) {
    movesForSelectedPiece = movesBySquare[selectedPiece.squareId]
    moveInitiator = movesForSelectedPiece[0].from
    targets = new Set(
      movesForSelectedPiece.map(move => move.to)
    )
  }

  return (
    <div className="chess-board">
      {squares.map(({ rank, file, piece, dark }) => {
        const squareId = `${file}${rank}`
        let moves = null
        let typeName = null
        let colorName = null
        let isTargeted = false
        let isActive = false
        let onClick = null

        if (piece) {
          typeName = piecesBySymbol[piece.type]
          colorName = colorsBySymbol[piece.color]
          moves = movesBySquare[squareId]

          if (moves?.length > 0) {
            onClick = () => dispatch(pieceSelected({ squareId }))
          }
        }

        if (squareId === moveInitiator) {
          isActive = true
        } else if (targets?.has(squareId)) {
          isTargeted = true
          onClick = () => {
            // @todo If there is a promotion flag,
            // default it to QUEEN
            const { from, to, promotion } = movesForSelectedPiece
              .find(move => move.to === squareId)

            const move = { from, to, promotion }
            dispatch(moveInitiated(fen, move))
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
