import React from 'react';

import useQueryChess from './hooks/useQueryChess'
import useAI from './hooks/useAI'

import Board from './components/Board'
import GameLog from './components/GameLog'

export default function App() {
  useQueryChess()
  useAI()

  return (
    <>
      <Board/>
      <GameLog/>
    </>
  )
}
