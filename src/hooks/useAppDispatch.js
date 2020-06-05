import React, { useContext } from 'react'

export const AppDispatchContext = React.createContext(null);

export default function useAppDispatch() {
  return useContext(AppDispatchContext)
}
