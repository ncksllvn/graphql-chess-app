import React from 'react'

import {
  PIECE_SELECTED
} from '../constants/actions'

import {
  selectUI,
  selectChess
} from '../constants/selectors'

import useAppDispatch from './useAppDispatch'

import useAppState from './useAppState'

export default function useActiveSquare() {
  const dispatch = useAppDispatch()
  const chess = useAppState(selectChess)
  const { activeSquareId } = useAppState(selectUI)

  const squares = chess?.squares
  const movesBySquare = chess?.movesBySquare

  const activeSquare = React.useMemo(() => {
    if (!activeSquareId) {
      return null
    }

    const square = squares.find(
      (square) =>
        square.id === activeSquareId
      )

    const moves = movesBySquare[square.id]
    const targets = new Set(
      moves?.map(
        (move) => move.to
      )
    )

    return {
      ...square,
      targets
    }
  }, [activeSquareId, squares, movesBySquare])

  const setActiveSquare = React.useCallback(
    (squareId) => (
      dispatch({ type: PIECE_SELECTED, squareId })
    )
  ,[dispatch])

  return [activeSquare, setActiveSquare]
}
