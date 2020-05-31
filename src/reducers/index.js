import {
  combineReducers
} from 'redux'

import chess from './chess'
import appStatus from './appStatus'
import gameLog from './gameLog'
import ui from './ui'

export default combineReducers({
  chess,
  appStatus,
  gameLog,
  ui
})
