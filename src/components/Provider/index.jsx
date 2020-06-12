import React, { useReducer } from 'react';

import { INIT_STATE } from '../../constants/actions'

import { AppDispatchContext } from '../../hooks/useAppDispatch'
import { AppStateContext } from '../../hooks/useAppState'

import reducer from '../../reducers'

export default function Provider({ children }) {
  const initialState = reducer(undefined, { type: INIT_STATE })
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppStateContext.Provider value={state}>
      <AppDispatchContext.Provider value={dispatch}>
        {children}
      </AppDispatchContext.Provider>
    </AppStateContext.Provider>
  );
}
