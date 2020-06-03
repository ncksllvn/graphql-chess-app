import { useDispatch } from 'react-redux'

import {
  PIECE_SELECTED
} from '../constants/actions'

export default function usePieceSelected() {
  const dispatch = useDispatch()
  return (squareId) => (
    dispatch({ type: PIECE_SELECTED, squareId })
  )
}
