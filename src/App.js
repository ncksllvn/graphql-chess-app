import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'

import { startApp } from './actions'

import Board from './components/Board'
import Spinner from './components/Spinner'
import Log from './components/Log'

export default function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(startApp())
  }, [dispatch])

  return (
    <>
      <Board/>
      <Log/>
      <Spinner/>
    </>
  );
}
