import { graphql } from 'msw'
import { setupServer } from 'msw/node'

const server = setupServer(
  graphql.query('Chess', (req, res, ctx) => {
    return res(
      ctx.data(require('./fixtures/queries/chess.json').data)
    )
  }),
  graphql.mutation('Move', (req, res, ctx) => {
    const {
      fen,
      move: { from, to, promotion }
    } = req.variables

    // @todo need a more robust loading system
    // that also takes into account the fen variable

    return res(
      ctx.data(
        require(`./fixtures/mutations/${from}-${to}.json`).data
      )
    )
  })
)

export default server
