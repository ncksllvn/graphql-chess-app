import {
  PIECE_SELECTED,
  MOVE_INITIATED
} from '../constants/actions'

const initialState = {
  selectedSquareId: null
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case PIECE_SELECTED: {
      const canceled = (
        action.squareId === state.selectedSquareId
      )

      return {
        selectedSquareId: canceled ? null : action.squareId
      }
    }

    case MOVE_INITIATED.RECEIVE: {
      return { selectedSquareId: null }
    }

    default:
      return state
  }
}
