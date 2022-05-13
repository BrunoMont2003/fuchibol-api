import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import { App } from './App'
import './styles/globals.css'

const root = document.getElementById('root')
const container = createRoot(root)
container.render(
  <StrictMode>
    <App />
  </StrictMode>
)
