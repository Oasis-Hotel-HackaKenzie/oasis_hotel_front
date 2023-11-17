import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { GlobalStyle } from './styles/GlobalStyles.ts'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <GlobalStyle />
      <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
)
