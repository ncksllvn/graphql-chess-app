export const CALL_API = 'CALL_API'

export const CHESS_AND_CONSTANTS = {
  REQUEST: 'chess-and-constants/REQUEST',
  RECEIVE: 'chess-and-constants/RECEIVE',
  FAILURE: 'chess-and-constants/FAILURE'
}

export const PIECE_SELECTED = 'PIECE_SELECTED'

export const KEYS = {
  BLACK: 'BLACK',
  WHITE: 'WHITE',
  KING: 'KING',
  QUEEN: 'QUEEN',
  ROOK: 'ROOK',
  BISHOP: 'BISHOP',
  KNIGHT: 'KNIGHT',
  PAWN: 'PAWN',
}

export const PIECE_VISUALS = {
  [KEYS.KING]: {
    [KEYS.BLACK]: '\u265A',
    [KEYS.WHITE]: '\u2654'
  },
  [KEYS.QUEEN]: {
    [KEYS.BLACK]: '\u265B',
    [KEYS.WHITE]: '\u2655'
  },
  [KEYS.ROOK]: {
    [KEYS.BLACK]: '\u265C',
    [KEYS.WHITE]: '\u2656'
  },
  [KEYS.BISHOP]: {
    [KEYS.BLACK]: '\u265D',
    [KEYS.WHITE]: '\u2657'
  },
  [KEYS.KNIGHT]: {
    [KEYS.BLACK]: '\u265E',
    [KEYS.WHITE]: '\u2658'
  },
  [KEYS.PAWN]: {
    [KEYS.BLACK]: '\u265F',
    [KEYS.WHITE]: '\u2659'
  }
}

export const USER_COLOR = KEYS.BLACK
