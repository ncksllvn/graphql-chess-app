import formatDate from 'date-fns/format'

import {
  EVENT_LOGGED
} from '../constants/actions'

const initialState = []

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case EVENT_LOGGED: {
      return [
        ...state,
        {
          time: formatDate(new Date(), 'HH:mm:ss'),
          message: action.data
        }
      ]
    }

    default:
      return state
  }
}
