import React from 'react';
import BottomNav from '../Components/BottomNav';

function Track() {
  const steps = [
    { event: 'Order Placed', date: 'Oct 10, 2024', time: '12:00 PM', completed: true },
    { event: 'Processing', date: 'Oct 11, 2024', time: '10:00 AM', completed: true },
    { event: 'Shipped', date: 'Oct 12, 2024', time: '3:00 PM', completed: false },
    { event: 'Delivered', date: 'Oct 14, 2024', time: '2:00 PM', completed: false }
  ];

  return (
    <div className="w-full h-dvh flex flex-col items-center bg-gray-100" style={{ fontFamily: 'Ropa sans' }}>
      <div className="flex w-11/12 flex-col pb-16">
        <div className="flex flex-row items-center mb-8 pt-5">
          <span className="w-24 font-bold text-gray-800">Track order</span>
          <span className="w-full h-0.5 bg-gray-300 rounded"></span>
        </div>

        <div className='flex flex-row gap-5 pb-8'>
          <div><h4 className='text-gray-800'>Order ID:</h4></div>
          <input className='bg-gray-200 text-gray-800 rounded-2xl px-4' placeholder='Enter your order id' />
        </div>

        <div className="flex flex-col">
          {steps.map((step, index) => (
            <div className="flex items-start justify-start" key={index}>
              {/* Left: Stepper (circle + line) */}
              <div className="relative flex flex-col items-center mr-4">
                {/* Circle */}
                <div
                  className={`w-6 h-6 rounded-full z-10 border-2 ${
                    step.completed ? 'bg-green-600 border-green-600' : 'bg-gray-400 border-gray-400'
                  }`}
                ></div>

                {/* Dynamic line below circle */}
                {index !== steps.length - 1 && (
                  <div
                    className={`w-0.5 ${steps[index + 1].completed ? 'bg-green-500' : 'bg-gray-400'}`}
                    style={{ minHeight: '90px', height: '100%' }}
                  ></div>
                )}
              </div>

              {/* Right: Event, Date, and Time */}
              <div className="flex flex-col w-full">
                <div className="font-semibold text-gray-800">{step.event}</div>
                <div className='flex flex-row gap-5'>
                <div className="text-gray-600">{step.completed ? step.date : ''}</div>
                {/* <div className="text-gray-500">{step.completed ? step.time : '___'}</div> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <BottomNav/>
    </div>
  );
}

export default Track;
