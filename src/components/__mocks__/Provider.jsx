import React, { useReducer } from 'react';

import { INIT_STATE } from '../../constants/actions'

import { AppDispatchContext } from '../../hooks/useAppDispatch'
import { AppStateContext } from '../../hooks/useAppState'

import reducer from '../../reducers'

export default function Provider({ render, children, initializers = [] }) {
  const initialState = reducer(undefined, { type: INIT_STATE })

  const furtherInitializedState = initializers.reduce(
      (result, action) => reducer(result, action)
    , initialState)

  const [state, dispatch] = useReducer(reducer, furtherInitializedState);
  const dispatchSpy = jest.fn(dispatch)

  return (
    <AppStateContext.Provider value={state}>
      <AppDispatchContext.Provider value={dispatchSpy}>
        {children}
      </AppDispatchContext.Provider>
    </AppStateContext.Provider>
  );
}
