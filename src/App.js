import React from 'react'
import Home from './Pages/Home'
import { Route, Routes } from 'react-router-dom'
import ProductDets from './Pages/ProductDets'

function App() {
  return (
<Routes>
  <Route path='/' element={<Home />} />
  <Route path='/products' element={<ProductDets />} />

        </Routes>
 )
}

export default App