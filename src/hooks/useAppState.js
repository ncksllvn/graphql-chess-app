import React, { useContext } from 'react'

export const AppStateContext = React.createContext(null);

export default function useAppState(selector) {
  const state = useContext(AppStateContext)
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
