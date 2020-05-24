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
        rank1 { type color }
        rank2 { type color }
        rank3 { type color }
        rank4 { type color }
        rank5 { type color }
        rank6 { type color }
        rank7 { type color }
        rank8 { type color }
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
