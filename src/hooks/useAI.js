import { useEffect, useCallback } from 'react'

import useSelector, { selectChess } from './useSelector'

import {
  AI_COLOR
} from '../constants/colors'

import usePieceSelected from './usePieceSelected'
import useMoveInitiated from './useMoveInitiated'

const AI_MOVE_DELAY = 1000

export default function useAI() {
  const chess = useSelector(selectChess)
  const turn = chess?.turn
  const gameOver = chess?.gameOver

  const pieceSelected = usePieceSelected()
  const moveInitiated = useMoveInitiated()

  const performMove = useCallback(
    async () => {
      const {
        moves,
        analysis
      } = chess

      const move = analysis?.bestMove ?? moves[0]

      pieceSelected(move.from)

      await new Promise(
        resolve => setTimeout(resolve, AI_MOVE_DELAY)
      )

      moveInitiated(chess, move.from, move.to)
    }
  , [chess, pieceSelected, moveInitiated])

  useEffect(() => {
    if (!gameOver && turn === AI_COLOR) {
      performMove()
    }
  }, [performMove, gameOver, turn])
}
