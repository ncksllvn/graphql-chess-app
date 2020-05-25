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
