import React, { useReducer } from 'react';
import ReactDOM from 'react-dom';

import './style/index.css';
import './style/breakpoints.css';

import { INIT_STATE } from './constants/actions'

import { DispatchContext } from './hooks/useDispatch'
import { StateContext } from './hooks/useSelector'

import App from './App';
import reducer from './reducers'

import * as serviceWorker from './serviceWorker';

function Root() {
  const initialState = reducer(undefined, { type: INIT_STATE })
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <React.StrictMode>
      <StateContext.Provider value={state}>
        <DispatchContext.Provider value={dispatch}>
          <App/>
        </DispatchContext.Provider>
      </StateContext.Provider>
    </React.StrictMode>
  );
}

ReactDOM.render(<Root/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
