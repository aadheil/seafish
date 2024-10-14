import React from 'react'
import Home from './Pages/Home'
import { Route, Routes } from 'react-router-dom'
import ProductDets from './Pages/ProductDets'
import Track from './Pages/Track'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/products' element={<ProductDets />} />
      <Route path='/track' element={<Track />} />
    </Routes>
  )
}

export default App