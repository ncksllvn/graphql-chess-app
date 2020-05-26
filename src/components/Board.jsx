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
    selectedSquareId
  }  = ui

  const {
    fen,
    squares,
    movesBySquare
  } = chess

  let movesForSelection = null
  let targets = null

  if (selectedSquareId) {
    movesForSelection = movesBySquare[selectedSquareId]
    targets = new Set(
      movesForSelection.map(move => move.to)
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

        if (squareId === selectedSquareId) {
          isActive = true
          ariaLabel = `${squareId} contains a ${pieceTitle} selected for move. Cancel selection.`
        } else if (targets?.has(squareId)) {
          isTargeted = true
          ariaLabel = `Move to ${squareId}`
          onClick = () => {
            // @todo If there is a promotion flag,
            // default it to QUEEN
            const { from, to, promotion } = movesForSelection
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
          ariaLabel,
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
