import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import StoreProvider from './context/StoreProvider.jsx'

createRoot(document.getElementById('root')).render(
<StoreProvider>
<BrowserRouter>
    <App />
  </BrowserRouter>
</StoreProvider>
)
