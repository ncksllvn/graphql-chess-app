import { useEffect } from 'react'

import {
  AI_COLOR
} from '../constants/colors'

import PIECES from '../constants/pieces'

import {
  pieceSelected,
  moveInitiated
} from '../actions'

const aiMoveDelay = 1000

export default function useAI(dispatch, chess) {
  return useEffect(() => {
    async function performAiMove() {
      const {
        fen,
        moves,
        analysis
      } = chess

      let move = null

      if (!analysis?.bestMove) {
        move = moves[0]
      } else {
        // @todo bestMove doesn't include the promotion flag, so we grab
        // the corresponding move from the moves array
        const { bestMove } = analysis
        move = moves.find(
          move => move.from === bestMove.from && move.to === bestMove.to
        )
      }

      let { from, to, promotion } = move

      if (promotion) {
        // Disable under-promoting
        promotion = PIECES.QUEEN
      }

      dispatch(pieceSelected(from))

      await new Promise(resolve => setTimeout(resolve, aiMoveDelay))

      dispatch(
        moveInitiated(fen, { from, to, promotion })
      )
    }

    if (chess?.turn === AI_COLOR) {
      performAiMove()
    }

  }, [dispatch, chess])
}
