import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx' // default
import { GlobalStyles } from './styles/GlobalStyles.js'
/*import {App, App2} from './App.jsx' // sem default */


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <GlobalStyles />
    <App />
  </StrictMode>,
)
