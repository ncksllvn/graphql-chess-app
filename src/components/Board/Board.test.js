import React from 'react'

import {
  render,
  screen,
} from '@testing-library/react'

import{
  Provider,
  QueryChess
} from '../../testing/helpers'

import Board from '.';

test('renders a loaded chess board', async () => {
  render(
    <Provider>
      <QueryChess>
        <Board/>
      </QueryChess>
    </Provider>
  )

  screen.getByTestId('chess-board--loading')

  await screen.findByTestId('chess-board')

  // Pawns
  expect(screen.getAllByText('♟').length).toBe(8)
  expect(screen.getAllByText('♙').length).toBe(8)

  // Rooks
  expect(screen.getAllByText('♜').length).toBe(2)
  expect(screen.getAllByText('♖').length).toBe(2)

  // Knights
  expect(screen.getAllByText('♞').length).toBe(2)
  expect(screen.getAllByText('♘').length).toBe(2)

  // Bishops
  expect(screen.getAllByText('♝').length).toBe(2)
  expect(screen.getAllByText('♗').length).toBe(2)

  // Queen
  screen.getByText('♛')
  screen.getByText('♕')

  // Kings
  screen.getByText('♚')
  screen.getByText('♔')
})
