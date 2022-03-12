import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Globalstyle } from './style';
import store from './store';
//reducer
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={store}>
    <Globalstyle />
    <App />
  </Provider>,
  document.getElementById('root')
);
