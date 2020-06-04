import React from 'react'
import useDispatch from './useDispatch'

import {
  PIECE_SELECTED
} from '../constants/actions'

export default function usePieceSelected() {
  const dispatch = useDispatch()
  return React.useCallback(
    (squareId) => (
      dispatch({ type: PIECE_SELECTED, squareId })
    )
  ,[dispatch])
}
