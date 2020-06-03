import React, { useEffect } from 'react';

import { GET_CHESS } from './graphql'
import { APP_STARTED } from './constants/actions'

import useAI from './hooks/useAI'
import useAPI from './hooks/useAPI'

import Board from './components/Board'
import Log from './components/Log'

export default function App() {
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

  useAI()

  return (
    <>
      <Board/>
      <Log/>
    </>
  );
}
