import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { DarkModeProvider } from './hooks/useTheme'
import App from './App'


const root = document.getElementById('root')

ReactDOM.render(
  <BrowserRouter>
    <DarkModeProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </DarkModeProvider>
  </BrowserRouter>
  , root)

if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js').then(registration => {
      console.log('SW registered: ', registration)
    }).catch(registrationError => {
      console.log('SW registration failed: ', registrationError)
    })
  })
}