import {
  PIECE_SELECTED,
  MOVE
} from '../constants'

const initialState = {
  selectedPiece: null
}

export default function userInteractions(state = initialState, action) {
  switch (action.type) {
    case PIECE_SELECTED: {
      const selectedPiece = action.piece

      if (selectedPiece.squareId === state.selectedPiece?.squareId) {
        return { ...state, selectedPiece: null }
      }

      return { ...state, selectedPiece }
    }

    case MOVE.RECEIVE: {
      return { ...state, selectedPiece: null }
    }

    default:
      return state
  }
}
