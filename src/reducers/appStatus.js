import {
  APP_STARTED,
} from '../constants/actions'

const initialState = {
  initializing: true
}

export default function reducer(state = initialState, action) {
  switch (action.type) {

    case APP_STARTED.RECEIVE: {
      return { initializing: false }
    }

    case APP_STARTED.FAILURE: {
      return { initializing: false, errors: action.errors }
    }

    default:
      return state
  }
}
