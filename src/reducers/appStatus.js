import {
  APP_STARTED,
  MOVE_INITIATED
} from '../constants/actions'

const initialState = {
  loading: true
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case APP_STARTED.REQUEST: {
      return { loading: true }
    }

    case APP_STARTED.RECEIVE: {
      return { loading: false }
    }

    case MOVE_INITIATED.RECEIVE: {
      return { loading: false }
    }

    case APP_STARTED.FAILURE: {
      return { loading: false, errors: action.errors }
    }

    default:
      return state
  }
}
