import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'



const mainRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <h1>home</h1>,
      },
      // {
      //   path: "about",           
      //   element: (
      //     <Suspense fallback={<h1>Loading....</h1>}>
      //       <About />
      //     </Suspense>
      //   ),
      // },
      {
        path: "contact",
        element: <h1 > contact</h1>,
      },
     
      
    ]
  },
])




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={mainRouter} />
  </React.StrictMode>,
)
