import React from 'react';
import { useDispatch, useSelector } from 'react-redux'

import { selectChess } from './selectors'
import useStartApp from './hooks/useStartApp'
import useAI from './hooks/useAI'
import Board from './components/Board'
import Log from './components/Log'

export default function App() {
  const dispatch = useDispatch()
  const chess = useSelector(selectChess)

  useStartApp(dispatch)
  useAI(dispatch, chess)

  return (
    <>
      <Board/>
      <Log/>
    </>
  );
}
