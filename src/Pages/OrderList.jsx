import { Icon } from '@iconify/react/dist/iconify.js'
import React from 'react'
import BottomNav from '../Components/BottomNav';

function OrderList() {
  // Sample order data array
  const orders = [
    { id: 1, name: 'Salmon', type: 'Fillet', weight: '5kg', quantity: '10 boxes', date: 'October 9, 2024',price:'120$' },
    { id: 2, name: 'Tuna', type: 'Steak', weight: '3kg', quantity: '5 boxes', date: 'October 10, 2024',price:'100$' },
    { id: 3, name: 'Cod', type: 'Whole', weight: '7kg', quantity: '8 boxes', date: 'October 11, 2024',price:'105$' },
    { id: 4, name: 'Mackerel', type: 'Fillet', weight: '6kg', quantity: '12 boxes', date: 'October 12, 2024',price:'Pending' },
    { id: 5, name: 'Trout', type: 'Whole', weight: '4kg', quantity: '6 boxes', date: 'October 13, 2024',price:'Pending' },
    { id: 3, name: 'Cod', type: 'Whole', weight: '7kg', quantity: '8 boxes', date: 'October 11, 2024',price:'105$' },
    { id: 4, name: 'Mackerel', type: 'Fillet', weight: '6kg', quantity: '12 boxes', date: 'October 12, 2024',price:'Pending' },
    { id: 5, name: 'Trout', type: 'Whole', weight: '4kg', quantity: '6 boxes', date: 'October 13, 2024',price:'Pending' },
    { id: 3, name: 'Cod', type: 'Whole', weight: '7kg', quantity: '8 boxes', date: 'October 11, 2024',price:'105$' },
    { id: 4, name: 'Mackerel', type: 'Fillet', weight: '6kg', quantity: '12 boxes', date: 'October 12, 2024',price:'Pending' },
    { id: 5, name: 'Trout', type: 'Whole', weight: '4kg', quantity: '6 boxes', date: 'October 13, 2024',price:'Pending' },

  ];

  return (
    <div className="w-full h-dvh overflow-y-scroll flex flex-col items-center bg-gray-100" style={{ fontFamily: 'Ropa Sans' }}>
      <div className="flex w-11/12 flex-col mb-16">
        <span className="pb-3 pt-3 flex flex-row gap-1 items-center text-gray-600">
          <Icon icon="ion:chevron-back" />
          <span>Home</span>
        </span>
        {/* Map through the orders array to display each order */}
        {orders.map((order) => (
          <div key={order.id} className="flex flex-col mb-6">
            <div>
              <p className="text-gray-500">{order.date}</p>
            </div>
            <div className="w-full h-full bg-white rounded-2xl shadow-lg flex flex-row p-4 border">
              {/* Left section for the order details */}
              <div className="flex flex-col w-9/12 gap-1">
                <h4 className="font-bold text-gray-600">{order.name}</h4>
                <div className="flex flex-row flex-wrap gap-2">
                  <span className="bg-gray-100 text-gray-500 px-2 rounded-full inline-block">{order.type}</span>
                  <span className="bg-gray-100 text-gray-500 px-2 rounded-full inline-block">{order.weight}</span>
                  <span className="bg-gray-100 text-gray-500 px-2 rounded-full inline-block">{order.quantity}</span>
                </div>
              </div>

              <span className='h-auto w-[1px] bg-gray-200 rounded-full'></span>

         <div className='flex flex-col w-3/12 items-center justify-center'>
            <div><h5 className={`font-bold ${order.price=='Pending'?'text-lg text-[#b2a03a]':'text-xl text-[#3A87B2]'}`}>{order.price}</h5></div>
         </div>
            </div>
          </div>
        ))}
      </div>

      <BottomNav/>
    </div>
  );
}

export default OrderList;
