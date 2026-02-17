import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import LozenApp from './LozenApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LozenApp />
  </StrictMode>,
)
