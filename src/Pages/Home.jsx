import React from 'react'
import Popular from '../Components/Popular'
import Products from '../Components/Products'
import BottomNav from '../Components/BottomNav' // Import the BottomNav component

function Home() {
  return (
    <div className='w-full h-full flex flex-col items-center bg-gray-100' style={{fontFamily:'Ropa sans'}}>
        
        <div className='flex w-11/12 flex-col mb-16'>
          <div className='font-bold text-xl pb-5 items-center flex flex-row justify-between'>
            <h4 className='text-gray-800' style={{fontFamily:'Chakra Petch'}}>SEA FOODS</h4>
            <img src="https://parspng.com/wp-content/uploads/2022/11/fishpng.parspng.com_.png" className='w-12 h-12' alt="Sea Foods" />
          </div>   
          <Popular />
          <Products />
        </div>

        {/* Use the reusable BottomNav component */}
        <BottomNav />
    </div>
  )
}

export default Home
