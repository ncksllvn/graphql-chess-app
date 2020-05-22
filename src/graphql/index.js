const CHESS_FRAGMENT = `
  fragment ChessAttributes on Chess {
    ascii
      analysis {
        bestMove {
          from
          to
          flags
        }
      }
      board {
        a { type color }
        b { type color }
        c { type color }
        d { type color }
        e { type color }
        f { type color }
        g { type color }
        h { type color }
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
      }
      turn
  }
`

export const GET_CONSTANTS_AND_CHESS = `
  ${CHESS_FRAGMENT}
  {
    chess {
      ... ChessAttributes
    }

    constants {
      BISHOP
      BLACK
      KING
      KNIGHT
      PAWN
      QUEEN
      ROOK
      SQUARES
      WHITE
      FLAGS {
        NORMAL
        CAPTURE
        BIG_PAWN
        EP_CAPTURE
        PROMOTION
        KSIDE_CASTLE
        QSIDE_CASTLE
      }
    }
  }
`
