import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Globalstyle } from './style';

//reducer
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducers'

const middleware = [ thunk ]
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware)),
)

ReactDOM.render(
  <Provider store={store}>
    <Globalstyle />
    <App />
  </Provider>,
  document.getElementById('root')
);
