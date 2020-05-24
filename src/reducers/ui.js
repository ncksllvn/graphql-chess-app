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
      if (
        selectedPiece.file === state.selectedPiece?.file &&
        selectedPiece.rank === state.selectedPiece?.rank
      ) {
        return { ...state, selectedPiece: null }
      }

      return { ...state, selectedPiece }
    }

    default:
      return state
  }
}
