import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension';

// import '98.css'
import './style/index.css';
import './style/breakpoints.css';
import './style/spinner.css';

import App from './App';
import reducers from './reducers'
import api from './middleware/api'
import * as serviceWorker from './serviceWorker';

const middleware = [api]
const enhancers = composeWithDevTools(applyMiddleware(...middleware))
const store = createStore(reducers, enhancers)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
