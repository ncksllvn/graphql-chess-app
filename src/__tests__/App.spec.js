import React from 'react'

import {
  render,
  screen,
  fireEvent,
  waitFor,
  findByText,
} from '@testing-library/react'

import {
  Provider,
  AI_MOVE_DELAY
} from '../testing/helpers'

import App from '../App'

test('it plays chess', async () => {
  render(
    <Provider>
      <App/>
    </Provider>
  )

  const gameLog = await screen.findByRole('log')

  // Player moves from f2 to f3
  fireEvent.click(
    await screen.findByLabelText('f2 contains a white pawn')
  )

  fireEvent.click(
    screen.getByLabelText('Move white pawn on f2 to f3')
  )

  await screen.findByLabelText('f3 contains a white pawn')

  // AI moves from e7 to e5
  await screen.findByLabelText(
    'e7 contains a black pawn selected for move',
    { exact: false }
  )

  await waitFor(
    () => screen.getByLabelText('e7 is empty')
  , { timeout: AI_MOVE_DELAY })

  await screen.findByLabelText('e5 contains a black pawn')

  // Player moves from g2 to g4
  fireEvent.click(
    await screen.findByLabelText('g2 contains a white pawn')
  )

  fireEvent.click(
    screen.getByLabelText('Move white pawn on g2 to g4')
  )

  await screen.findByLabelText('g4 contains a white pawn')

  // AI moves from e7 to e5
  await screen.findByLabelText(
    'd8 contains a black queen selected for move',
    { exact: false }
  )

  await waitFor(
    () => screen.getByLabelText('d8 is empty')
  , { timeout: AI_MOVE_DELAY })

  await screen.findByLabelText('h4 contains a black queen')

  // Checkmate
  await findByText(gameLog, 'white is in checkmate', { exact: false })
})
