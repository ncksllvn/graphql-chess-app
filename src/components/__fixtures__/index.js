import chessJson from './chess.json'
import chessUpdatedJson from './chess-updated.json'
import {
  APP_STARTED,
  MOVE_INITIATED,
  PIECE_SELECTED
} from '../../constants/actions'

export const actions = {
  appStarted: {
    type: APP_STARTED.RECEIVE,
    data: chessJson.data
  },
  pieceSelected: {
    type: PIECE_SELECTED,
    squareId: 'g2'
  },
  moveInitiated: {
    type: MOVE_INITIATED.RECEIVE,
    data: chessUpdatedJson.data
  }
}
