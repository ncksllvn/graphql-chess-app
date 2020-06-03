import {
  PIECE_SELECTED,
  MOVE_INITIATED
} from '../constants/actions'

const initialState = {
  selectedSquareId: null,
  pendingMove: null
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case PIECE_SELECTED: {
      const canceled = (
        action.squareId === state.selectedSquareId
      )

      return {
        ...state,
        selectedSquareId: canceled ? null : action.squareId
      }
    }

    case MOVE_INITIATED.RECEIVE: {
      return {
        ...state,
        pendingMove: null,
        selectedSquareId: null
      }
    }

    case MOVE_INITIATED.REQUEST: {
      return {
        ...state,
        pendingMove: action.data.variables.move
      }
    }

    default:
      return state
  }
}
