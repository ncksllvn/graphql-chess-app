import { useCallback } from 'react'
import { useDispatch } from 'react-redux'

const serverUrl = process.env.REACT_APP_API
const method = 'POST'
const headers =  {
  'Content-Type': 'application/json'
}

export default function useAPI() {
  const dispatch = useDispatch()

  return useCallback(
    async ({ query, variables, types }) => {
      const [request, receive, failure] = types
      const queryOptions = { query, variables }
      const body = JSON.stringify(queryOptions)
      const options = { method, headers, body }

      dispatch({
        type: request,
        data: { query, variables }
      })

      try {
        const response = await fetch(serverUrl, options)

        if (response.ok) {
          const json = await response.json()
          const { data, errors } = json

          dispatch({ type: receive, data, errors })
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

        dispatch({ type: failure, errors: [normalized] })
      }
    }
  , [dispatch])
}
