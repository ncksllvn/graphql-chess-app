import React from 'react'

import {
  render,
  screen,
  fireEvent,
} from '@testing-library/react'

import{
  Provider,
  QueryChess
} from '../testing/helpers'

import Board from '../components/Board';

test('it renders a chess board in starting position', async () => {
  render(
    <Provider>
      <QueryChess>
        <Board/>
      </QueryChess>
    </Provider>
  )

  screen.getByTestId('chess-board--loading')

  await screen.findByTestId('chess-board')

  screen.getByLabelText('a8 contains a black rook')
  screen.getByLabelText('b8 contains a black knight')
  screen.getByLabelText('c8 contains a black bishop')
  screen.getByLabelText('d8 contains a black queen')
  screen.getByLabelText('e8 contains a black king')
  screen.getByLabelText('f8 contains a black bishop')
  screen.getByLabelText('g8 contains a black knight')
  screen.getByLabelText('h8 contains a black rook')

  screen.getByLabelText('a7 contains a black pawn')
  screen.getByLabelText('b7 contains a black pawn')
  screen.getByLabelText('c7 contains a black pawn')
  screen.getByLabelText('d7 contains a black pawn')
  screen.getByLabelText('e7 contains a black pawn')
  screen.getByLabelText('f7 contains a black pawn')
  screen.getByLabelText('g7 contains a black pawn')
  screen.getByLabelText('h7 contains a black pawn')

  'abcdefgh'.split('').forEach(
    rank => '6543'.split('').forEach(
      file =>
        screen.getByLabelText(`${rank}${file} is empty`)
    )
  )

  screen.getByLabelText('a2 contains a white pawn')
  screen.getByLabelText('b2 contains a white pawn')
  screen.getByLabelText('c2 contains a white pawn')
  screen.getByLabelText('d2 contains a white pawn')
  screen.getByLabelText('e2 contains a white pawn')
  screen.getByLabelText('f2 contains a white pawn')
  screen.getByLabelText('g2 contains a white pawn')
  screen.getByLabelText('h2 contains a white pawn')

  screen.getByLabelText('a1 contains a white rook')
  screen.getByLabelText('b1 contains a white knight')
  screen.getByLabelText('c1 contains a white bishop')
  screen.getByLabelText('d1 contains a white queen')
  screen.getByLabelText('e1 contains a white king')
  screen.getByLabelText('f1 contains a white bishop')
  screen.getByLabelText('g1 contains a white knight')
  screen.getByLabelText('h1 contains a white rook')
})

test('it renders a selected piece', async () => {
  render(
    <Provider>
      <QueryChess>
        <Board/>
      </QueryChess>
    </Provider>
  )

  await screen.findByTestId('chess-board')

  const whiteKnight = screen.getByLabelText('b1 contains a white knight')

  fireEvent.click(whiteKnight)

  expect(
    screen.getByLabelText(
      'b1 contains a white knight selected for move.',
      { exact: false }
    ) === whiteKnight
  )

  screen.getByLabelText('Move white knight on b1 to a3')
  screen.getByLabelText('Move white knight on b1 to c3')
})

test('it renders an updated board', async () => {
  render(
    <Provider>
      <QueryChess>
        <Board/>
      </QueryChess>
    </Provider>
  )

  fireEvent.click(
    await screen.findByLabelText('f2 contains a white pawn')
  )

  fireEvent.click(
    screen.getByLabelText('Move white pawn on f2 to f3')
  )

  await screen.findByLabelText('f2 is empty')
  await screen.getByLabelText('f3 contains a white pawn')
})
