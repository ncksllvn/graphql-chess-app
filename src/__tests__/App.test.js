import React from 'react'

// https://redd.gitbook.io/msw/api/graphql
import { rest, graphql } from 'msw'
import { setupServer } from 'msw/node'
import { render, fireEvent, waitFor, act, screen } from '@testing-library/react'

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

test('it does things', async () => {
  render(
    <Provider>
      <App/>
    </Provider>
  )

  await waitFor(() => screen.getByText('♛'))

  console.log(screen.debug())
})
