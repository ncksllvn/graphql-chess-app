import React from 'react';
import { useDispatch } from 'react-redux'

import useStartApp from './hooks/useStartApp'
import Board from './components/Board'
import Log from './components/Log'

export default function App() {
  const dispatch = useDispatch()

  useStartApp(dispatch)

  return (
    <>
      <Board/>
      <Log/>
    </>
  );
}
