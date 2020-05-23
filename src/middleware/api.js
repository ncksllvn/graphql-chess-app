import {
  CALL_API
} from '../constants'

const CHESS_SERVER = process.env.REACT_APP_API
const method = 'POST'
const headers =  {
  'Content-Type': 'application/json'
}

export default () => next => async action => {
  if (!action[CALL_API]) {
    return next(action)
  }

  const {
    query,
    types: [request, receive, failure]
  } = action[CALL_API]

  const queryOptions = { query, variables: '' }
  const body = JSON.stringify(queryOptions)
  const options = { method, headers, body }

  next({ type: request })

  try {
    const response = await fetch(CHESS_SERVER, options)

    if (response.ok) {
      const json = await response.json()
      const { data, errors } = json

      if (data) {
        next({ type: receive, data })
      }

      if (errors) {
        next({ type: failure, errors })
      }
    } else {
      throw new Error('Response not ok')
    }
  } catch(error) {
    let normalized = error
    if (error instanceof Error) {
      normalized = {
        name: error.name,
        message: error.message,
        stack: error.stack
      }
    }
    next({ type: failure, errors: [normalized] })
  }
}
