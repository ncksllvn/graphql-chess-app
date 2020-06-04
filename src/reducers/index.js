import chess from './chess'
import appStatus from './appStatus'
import gameLog from './gameLog'
import ui from './ui'

const reducers = {
  chess,
  appStatus,
  gameLog,
  ui
}

export default function root(state, action) {
  return Object.entries(reducers)
    .reduce(
      (nextState, [key, reducer]) => {
        const slice = reducer(state?.[key], action)
        return {
          ...nextState,
          [key]: slice
        }
      }
    , state)
}
