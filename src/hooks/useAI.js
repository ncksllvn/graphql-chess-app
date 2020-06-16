import { useEffect, useCallback } from 'react'

import { AI_MOVE_DELAY } from '../constants/misc'
import { AI_COLOR } from '../constants/colors'
import { selectChess } from '../constants/selectors'

import useAppState from './useAppState'
import useActiveSquare from './useActiveSquare'
import useInitiateMove from './useInitiateMove'

export default function useAI() {
  const chess = useAppState(selectChess)
  const turn = chess?.turn
  const gameOver = chess?.gameOver

  const [, setActiveSquare] = useActiveSquare()
  const moveInitiated = useInitiateMove()

  const performMove = useCallback(
    async () => {
      const {
        moves,
        analysis
      } = chess

      const move = analysis?.bestMove ?? moves[0]

      setActiveSquare(move.from)

      await new Promise(
        resolve => setTimeout(resolve, AI_MOVE_DELAY)
      )

      moveInitiated(chess, move.from, move.to)
    }
  , [chess, setActiveSquare, moveInitiated])

  useEffect(() => {
    if (!gameOver && turn === AI_COLOR) {
      performMove()
    }
  }, [performMove, gameOver, turn])
}
