import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'

import Board from './components/Board'
import Spinner from './components/Spinner'
import { startApp } from './actions'

export default function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(startApp())
  }, [dispatch])

  return (
    <>
      <Board/>
      <Spinner/>
    </>
  );
}
