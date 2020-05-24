import { combineReducers } from 'redux'

import appStatus from './appStatus'
import chess from './chess'
import constants from './constants'
import ui from './ui'

export default combineReducers({
  appStatus, chess, constants, ui
})
