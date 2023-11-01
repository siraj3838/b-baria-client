import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import AuthProvider from './Provider/AuthProvider'
import MyRouter from './Router/MyRouter.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider><AuthProvider><RouterProvider router={MyRouter}>
    </RouterProvider></AuthProvider></HelmetProvider>
  </React.StrictMode>,
)
