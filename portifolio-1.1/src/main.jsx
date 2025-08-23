import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './pages/App.jsx'
import {Globalstyles} from './Globalstyles.js'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Globalstyles />
    <App />
  </StrictMode>,
)
