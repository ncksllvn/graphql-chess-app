import React from 'react'
import { useSelector } from 'react-redux'

import {
  KEYS
} from '../constants'

import Square from './Square'

export default function Board() {
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

  let selected = null

  if (selectedSquareId) {
    let selectedPiece = chess.squares.find(
      square => square.id === selectedSquareId
    ).piece

    selectedPiece = {
      typeName: piecesBySymbol[selectedPiece.type],
      colorName: colorsBySymbol[selectedPiece.color],
      ...selectedPiece
    }

    let selectedPieceMoves = movesBySquare[selectedSquareId]

    selected = {
      squareId: selectedSquareId,
      moves: selectedPieceMoves,
      piece: selectedPiece
    }
  }

  const classNames= ['chess-board']

  if (colorsBySymbol[turn] === KEYS.BLACK) {
    classNames.push('chess-board--black-turn')
  }

  return (
    <div className={classNames.join(' ')}>
      {squares.map(({ id: squareId, piece, dark }) => {
        const props = {
          key: squareId,
          squareId,
          dark,
          moves: movesBySquare[squareId],
          piece: piece && {
            typeName: piecesBySymbol[piece.type],
            colorName: colorsBySymbol[piece.color],
            ...piece
          },
          selected,
          pieceConstants,
          fen
        }

        return (
          <Square {...props}/>
        )
      })}
    </div>
  )
}
