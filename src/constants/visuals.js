import COLORS from './colors'
import PIECES from './pieces'

const visuals = {
  [PIECES.KING]: {
    [COLORS.BLACK]: '\u265A',
    [COLORS.WHITE]: '\u2654'
  },
  [PIECES.QUEEN]: {
    [COLORS.BLACK]: '\u265B',
    [COLORS.WHITE]: '\u2655'
  },
  [PIECES.ROOK]: {
    [COLORS.BLACK]: '\u265C',
    [COLORS.WHITE]: '\u2656'
  },
  [PIECES.BISHOP]: {
    [COLORS.BLACK]: '\u265D',
    [COLORS.WHITE]: '\u2657'
  },
  [PIECES.KNIGHT]: {
    [COLORS.BLACK]: '\u265E',
    [COLORS.WHITE]: '\u2658'
  },
  [PIECES.PAWN]: {
    [COLORS.BLACK]: '\u265F',
    [COLORS.WHITE]: '\u2659'
  }
}

export default visuals
