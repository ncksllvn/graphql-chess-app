import {
  EVENT_LOGGED
} from '../constants/actions'

const initialState = []

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case EVENT_LOGGED: {
      return [...state, action.data]
    }

    default:
      return state
  }
}
