const CHESS_FRAGMENT = `
  fragment ChessAttributes on Chess {
      analysis {
        bestMove {
          from
          to
          flags
        }
        ponderMove {
          from
          to
          flags
        }
      }
      board {
        rank
        squares {
          file
          piece {
            type
            color
          }
        }
      }
      fen
      gameOver
      inCheck
      inCheckmate
      inDraw
      inStalemate
      insufficientMaterial
      inThreefoldRepetition
      moves {
        color
        from
        to
        promotion
        flags
      }
      turn
  }
`

export const GET_CHESS = `
  ${CHESS_FRAGMENT}
  query Chess {
    chess {
      ... ChessAttributes
    }
  }
`

export const MAKE_MOVE = `
  ${CHESS_FRAGMENT}

  mutation Move($fen: String!, $move: MoveObjectInput!){
    chess: move (input: {
      fen: $fen,
      move: $move
    }) {
      ... ChessAttributes
    }
  }
`
