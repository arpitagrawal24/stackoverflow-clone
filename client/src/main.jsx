import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './index.css'
import { AllRoutes } from './AllRoutes.jsx'

const mainRouter = createBrowserRouter(AllRoutes)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={mainRouter} />
  </React.StrictMode>,
)
