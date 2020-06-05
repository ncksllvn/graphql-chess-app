import React from 'react'

import {
  PIECE_SELECTED
} from '../constants/actions'

import useDispatch from './useDispatch'

import useSelector, {
  selectUI,
  selectChess
} from './useSelector'

export default function useActiveSquare() {
  const dispatch = useDispatch()
  const chess = useSelector(selectChess)
  const { selectedSquareId } = useSelector(selectUI)

  const squares = chess?.squares
  const movesBySquare = chess?.movesBySquare

  const activeSquare = React.useMemo(() => {
    if (!selectedSquareId) {
      return null
    }

    const square = squares.find(
      (square) =>
        square.id === selectedSquareId
      )

    const moves = movesBySquare[square.id]
    const targets = moves?.map(
        (move) => move.to
      )

    return {
      ...square,
      targets
    }
  }, [selectedSquareId, squares, movesBySquare])

  const setActiveSquare = React.useCallback(
    (squareId) => (
      dispatch({ type: PIECE_SELECTED, squareId })
    )
  ,[dispatch])

  return [activeSquare, setActiveSquare]
}
