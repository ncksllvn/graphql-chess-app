import React, { useContext } from 'react'

export const StateContext = React.createContext(null);

export default function useSelector(selector) {
  const state = useContext(StateContext)
  return React.useMemo(
    () => {
      return selector(state)
    }
  ,[selector, state])
}

export function selectAppStatus(state) {
  return state.appStatus
}

export function selectChess(state) {
  return state.chess
}

export function selectGameLog(state) {
  return state.gameLog
}

export function selectUI(state) {
  return state.ui
}
