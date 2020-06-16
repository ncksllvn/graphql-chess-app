import {
  AI_MOVE_DELAY as AI_MOVE_DELAY_UNBUFFERED
} from '../constants/misc'

import Provider from '../components/Provider'
import QueryChess from './components/QueryChess'

const AI_MOVE_DELAY = AI_MOVE_DELAY_UNBUFFERED + 100

export {
  Provider,
  QueryChess,
  AI_MOVE_DELAY
}
