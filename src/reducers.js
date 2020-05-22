import {
  INIT_CHESS_REQUESTED,
  INIT_CHESS_SUCCESS,
  INIT_CHESS_ERROR
} from './actions'

const initialState = {
  appStatus: {
    loading: true
  }
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case INIT_CHESS_REQUESTED:
      return {
        ...state,
        appStatus: { loading: true }
      }

    case INIT_CHESS_SUCCESS:
      console.log(action)
      return {
        ...state,
        appStatus: { data: action.data }
      }

    case INIT_CHESS_ERROR:
      return {
        ...state,
        appStatus: { errors: action.errors }
      }

    default:
      return state
  }
}
