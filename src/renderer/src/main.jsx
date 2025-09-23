import './assets/main.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Order from './Pages/Order'
import Tables from './Pages/Tables'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/order" element={<Order />} />
        <Route path="/tables" element={<Tables />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)