import React from 'react'
import { Icon } from '@iconify/react/dist/iconify.js'

function BottomNav() {
  return (
    <div className="fixed bottom-0 w-full bg-white shadow-lg h-16 flex justify-around items-center" style={{fontFamily:"Ropa sans"}}>
      <div className="flex flex-col items-center text-gray-600 hover:text-blue-500">
        <Icon icon="ic:baseline-home" width="24" />
        <span className="text-sm">Home</span>
      </div>
      <div className="flex flex-col items-center text-gray-600 hover:text-blue-500">
        <Icon icon="ic:baseline-shopping-cart" width="24" />
        <span className="text-sm">Cart</span>
      </div>
      <div className="flex flex-col items-center text-gray-600 hover:text-blue-500">
        <Icon icon="ic:baseline-format-list-bulleted" width="24" /> {/* Updated for ordered list */}
        <span className="text-sm">List</span>
      </div>
      <div className="flex flex-col items-center text-gray-600 hover:text-blue-500">
        <Icon icon="ic:baseline-map" width="24" /> {/* Updated for tracking */}
        <span className="text-sm">Track</span>
      </div>
    </div>
  )
}

export default BottomNav
