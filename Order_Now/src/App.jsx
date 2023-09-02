import { useState } from 'react'
import './App.css'
//import Header from './components/purchase/Header';
//import Header from './Component/Header'
import PurchaseOrder from './Pages/PurchaseOrder'
import CreateOrder from './Pages/CreateOrder'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PurchaseOrder/>} />
        <Route path="/CreateOrder" element={<CreateOrder/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
