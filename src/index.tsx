import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import reportWebVitals from './reportWebVitals'
import { RouterProvider } from 'react-router-dom'
import { router } from './App.router'
import { ThemeProvider } from './context/ThemeContext'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { GeneralProvider } from './context/GeneralContext'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <GeneralProvider>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </GeneralProvider>
  </React.StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
