import React from 'react'

import useSelector, {
  selectUI,
  selectChess
} from './useSelector'

export default function useActiveSquare() {
  const chess = useSelector(selectChess)
  const { selectedSquareId } = useSelector(selectUI)

  const squares = chess?.squares
  const movesBySquare = chess?.movesBySquare

  return React.useMemo(() => {
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
}
