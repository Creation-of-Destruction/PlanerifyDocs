import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './app/globals.css'
import App from './app/App.tsx'
import "./i18n/index.ts"
import "flag-icons/css/flag-icons.min.css";
import { CookiesProvider } from 'react-cookie'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <CookiesProvider>
          <App />
      </CookiesProvider>
  </StrictMode>,
)
