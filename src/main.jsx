import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client' 
import { GlobalStyles } from './styles/GlobalStyles.js'
import Home from './pages/Home' // default
/*import {App, App2} from './App.jsx' // sem default */


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <GlobalStyles />
    <Home />
  </StrictMode>,
)
