import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'

import { startApp } from './actions'

import Board from './components/Board'
import Spinner from './components/Spinner'
import Console from './components/Console'

export default function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(startApp())
  }, [dispatch])

  return (
    <>
      <Board/>
      <Console/>
      <Spinner/>
    </>
  );
}
