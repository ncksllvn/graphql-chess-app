import COLORS from './colors'
import PIECES from './pieces'

const visuals = {
  [PIECES.KING]: {
    [COLORS.BLACK]: '\u265A',
    [COLORS.WHITE]: '\u265A'
  },
  [PIECES.QUEEN]: {
    [COLORS.BLACK]: '\u265B',
    [COLORS.WHITE]: '\u265B'
  },
  [PIECES.ROOK]: {
    [COLORS.BLACK]: '\u265C',
    [COLORS.WHITE]: '\u265C'
  },
  [PIECES.BISHOP]: {
    [COLORS.BLACK]: '\u265D',
    [COLORS.WHITE]: '\u265D'
  },
  [PIECES.KNIGHT]: {
    [COLORS.BLACK]: '\u265E',
    [COLORS.WHITE]: '\u265E'
  },
  [PIECES.PAWN]: {
    [COLORS.BLACK]: '\u265F',
    [COLORS.WHITE]: '\u265F'
  }
}

export default visuals
