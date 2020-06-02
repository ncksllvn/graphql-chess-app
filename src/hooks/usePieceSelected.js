import { useCallback } from 'react'

import {
  pieceSelected
} from '../actions'

export default function usePieceSelected(dispatch) {
  return useCallback(
    (squareId) =>
      dispatch(
        pieceSelected(squareId)
      )
    , [dispatch]
  )
}
