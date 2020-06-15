import { useEffect } from 'react'

import { APP_STARTED } from '../constants/actions'
import { GET_CHESS } from '../constants/graphql'

import useAPI from './useAPI'

export default function useQueryChess() {
  const callAPI = useAPI()

  useEffect(() => {
    callAPI({
      query: GET_CHESS,
      types: [
        APP_STARTED.REQUEST,
        APP_STARTED.RECEIVE,
        APP_STARTED.FAILURE
      ]
    })
  }, [callAPI])
}
