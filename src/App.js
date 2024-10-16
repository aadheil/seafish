import React from 'react'
import Home from './Pages/Home'
import { Route, Routes } from 'react-router-dom'
import ProductDets from './Pages/ProductDets'
import Track from './Pages/Track'
import Login from './Pages/Login'
import OrderList from './Pages/OrderList'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/products' element={<ProductDets />} />
      <Route path='/track' element={<Track />} />
      <Route path='/login' element={<Login />} />
      <Route path='/list' element={<OrderList />} />

    </Routes>
  )
}

export default App