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

  fragment ColorConstants on Constants {
    BLACK
    WHITE
  }

  fragment PieceConstants on Constants {
    BISHOP
    KING
    KNIGHT
    PAWN
    QUEEN
    ROOK
  }

  {
    chess {
      ... ChessAttributes
    }

    colorConstants: constants {
      ... ColorConstants
    }

    pieceConstants: constants {
      ... PieceConstants
    }
  }
`
