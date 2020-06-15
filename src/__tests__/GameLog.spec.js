import React from 'react'

import {
  render,
  screen,
  findByText
} from '@testing-library/react'

import{
  Provider,
  QueryChess
} from '../testing/helpers'

import GameLog from '../components/GameLog';

test('renders game status', async () => {
  render(
    <Provider>
      <QueryChess>
        <GameLog/>
      </QueryChess>
    </Provider>
  )

  const gameLog = await screen.findByRole('log')

  await findByText(gameLog, 'initializing game', { exact: false })
  await findByText(gameLog, 'game ready', { exact: false })
})
