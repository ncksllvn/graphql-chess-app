import {
  PIECE_SELECTED
} from '../constants'

const initialState = {
  selectedPiece: null
}

export default function userInteractions(state = initialState, action) {
  switch (action.type) {
    case PIECE_SELECTED: {
      const selectedPiece = action.piece
      return { ...state, selectedPiece }
    }

    default:
      return state
  }
}
