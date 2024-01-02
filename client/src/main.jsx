import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import App from "./App";

import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import Reducers from "./reducers";
import { Provider } from 'react-redux'

const store = createStore(Reducers, compose(applyMiddleware(thunk)));

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
)
