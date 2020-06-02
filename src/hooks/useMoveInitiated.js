import { useCallback } from 'react'

import PIECES from '../constants/pieces'

import {
  moveInitiated
} from '../actions'

export default function useMoveInitiated(dispatch, chess, selectedSquare) {
  return useCallback(
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
        moveInitiated(chess.fen, { from, to, promotion })
      )
    }, [dispatch, chess, selectedSquare]
  )
}
