import './assets/main.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter, BrowserRouter, Routes, Route } from 'react-router-dom'
import Acceuil from './Pages/Acceuil'
import Dashboard from './Pages/Dashboard'
import Order from './Pages/Order'
import Tables from './Pages/Tables'

const Router =
  process.env.NODE_ENV === 'development' ? BrowserRouter : HashRouter

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Acceuil />} />
        <Route path="/order" element={<Order />} />
        <Route path="/tables" element={<Tables />} />
        <Route path="/admin" element={<Dashboard />} />
      </Routes>
    </Router>
  </StrictMode>
)