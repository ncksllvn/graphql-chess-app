const CHESS_FRAGMENT = `
  fragment ChessAttributes on Chess {
      analysis {
        bestMove {
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

  fragment FlagConstants on Constants {
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

    flagConstants: constants {
      ... FlagConstants
    }
  }
`

export const MAKE_MOVE = `
  ${CHESS_FRAGMENT}

  mutation makeMove($fen: String!, $move: MoveObjectInput!){
    chess: move (input: {
      fen: $fen,
      move: $move
    }) {
      ... ChessAttributes
    }
  }
`
