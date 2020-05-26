import {
  PIECE_SELECTED,
  MOVE
} from '../constants'

const initialState = {
  selectedSquareId: null
}

export default function userInteractions(state = initialState, action) {
  switch (action.type) {
    case PIECE_SELECTED: {
      const selectedSquareId = action.squareId

      if (selectedSquareId === state.selectedSquareId) {
        return { ...state, selectedSquareId: null }
      }

      return { ...state, selectedSquareId }
    }

    case MOVE.RECEIVE: {
      return { ...state, selectedSquareId: null }
    }

    default:
      return state
  }
}
