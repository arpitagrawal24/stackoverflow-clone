import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './index.css'
import { AllRoutes } from './AllRoutes.jsx'

import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import Reducers from "./reducers";
import { Provider } from 'react-redux'

const mainRouter = createBrowserRouter(AllRoutes)

const store = createStore(Reducers, compose(applyMiddleware(thunk)));

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={mainRouter} />
    </React.StrictMode>
  </Provider>,
)
