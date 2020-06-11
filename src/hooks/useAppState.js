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
