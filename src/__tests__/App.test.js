import React from 'react'

// https://redd.gitbook.io/msw/api/graphql
import { rest, graphql } from 'msw'
import { setupServer } from 'msw/node'

// https://testing-library.com/docs/react-testing-library/cheatsheet#docsNav
import {
  render,
  screen,
  findByText,
} from '@testing-library/react'

import App from '../App';
import Provider from '../components/Provider'

const server = setupServer(
  rest.post(process.env.REACT_APP_API, (req, res, ctx) => {
    return res(
      ctx.set('Access-Control-Allow-Origin', '*'),
      ctx.json(require('./fixtures/chess.json'))
    )
  })
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test('plays chess', async () => {
  render(
    <Provider>
      <App/>
    </Provider>
  )

  const gameLog = await screen.findByRole('log')

  await findByText(gameLog, 'initializing game', { exact: false })
  await findByText(gameLog, 'game ready', { exact: false })

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
