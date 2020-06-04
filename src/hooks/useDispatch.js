import React, { useContext } from 'react'

export const DispatchContext = React.createContext(null);

export default function useDispatch() {
  return useContext(DispatchContext)
}
