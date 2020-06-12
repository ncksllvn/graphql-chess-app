import { graphql } from 'msw'
import { setupServer } from 'msw/node'

import fixtures from './fixtures'

const server = setupServer(
  graphql.query('Chess', (req, res, ctx) => {
    return res(
      ctx.data(fixtures.queries.Chess.data)
    )
  })
)

export default server
