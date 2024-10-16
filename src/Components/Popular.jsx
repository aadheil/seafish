import React, { useState } from 'react';

function Popular() {
    const [popularFish, setPopularFish] = useState([
        { name: 'Mackerel', desc: 'Good sea of arabian sea', img: 'https://i.pinimg.com/736x/77/93/1e/77931e85927c95410690d58f4130df0c.jpg' },
        { name: 'Sardine', desc: 'Keraoa one oh jjhiue ', img: 'https://www.homenaturalcures.com/wp-content/uploads/sardine.jpeg' },
        { name: 'Salmon', desc: 'Make it awesome bgind ', img: 'https://thumbs.dreamstime.com/b/fresh-raw-salmon-red-fish-spices-salt-lemon-pepper-rosemary-dark-wooden-background-cooking-sea-healthy-top-view-carcass-255462864.jpg' },
    ]);

    return (
        <div className="w-full h-full">
            {/* Non-scrolling header */}
            <div className='flex flex-row items-center '>
                <span className='w-52 font-bold text-gray-600'>Popular products</span>
                <span className='w-full h-0.5 bg-gray-300 rounded'></span>
            </div>

            {/* Scrollable area */}
            <div className="w-full overflow-x-auto">
                <div className="flex flex-row gap-5  py-5">
                    {popularFish?.map((fish) => (
                       <div className='flex flex-col'>
                         <div key={fish.name} className="w-36 h-32 border bg-white shadow-lg rounded-2xl flex-shrink-0">
                            <img src={fish.img} alt={fish.name} className='w-full h-full rounded-2xl' />
                        </div>
                        <h5 className='ps-1 text-gray-800'>{fish.name}</h5>
                       </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Popular;
