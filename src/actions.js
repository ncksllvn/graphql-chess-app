import {
  GET_CONSTANTS_AND_CHESS
} from './graphql'

export const INIT_CHESS_REQUESTED = 'INIT_CHESS_REQUESTED'
export const INIT_CHESS_SUCCESS = 'INIT_CHESS_SUCCESS'
export const INIT_CHESS_ERROR = 'INIT_CHESS_ERROR'

export function initChess() {
  return async (dispatch, getState) => {
    const request = fetch(
      process.env.REACT_APP_API, {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'post',
      body: JSON.stringify({
        query: GET_CONSTANTS_AND_CHESS
      })
    })

    dispatch({
      type: INIT_CHESS_REQUESTED
    })

    try {
      const response = await request
      dispatch({
        type: INIT_CHESS_SUCCESS,
        data: await response.json()
      })
    } catch (errors) {
      dispatch({
        type: INIT_CHESS_ERROR,
        errors
      })
    }
  }
}
