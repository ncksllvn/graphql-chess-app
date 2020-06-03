import { useCallback } from 'react'

import { MAKE_MOVE } from '../graphql'
import { MOVE_INITIATED } from '../constants/actions'

import PIECES from '../constants/pieces'
import useAPI from './useAPI'

export default function useMoveInitiated() {
  const callAPI = useAPI()

  const moveInitiated = useCallback(
    (chess, sourceSquareId, destinationSquareId) => {
      let { from, to, promotion } = chess.moves.find(
        (move) => (
          move.from === sourceSquareId &&
          move.to === destinationSquareId
        )
      )

      if (promotion) {
        promotion = PIECES.QUEEN
      }

      callAPI({
        query: MAKE_MOVE,
        variables: {
          fen: chess.fen,
          move: { from, to, promotion }
        },
        types: [
          MOVE_INITIATED.REQUEST,
          MOVE_INITIATED.RECEIVE,
          MOVE_INITIATED.FAILURE
        ]
      })
    }
  , [callAPI])

  return moveInitiated
}
