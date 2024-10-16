import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Products() {
    const navigate=useNavigate()
    const [popularFish, setPopularFish] = useState([
        {name:'Mackerel',desc:'Mackerel species typically have deeply forked tails and vertical "tiger-like" stripes on their backs with an iridescent green-blue quality...',img:'https://static.freshtohome.com/media/catalog/product/cache/1/image/18ae109e34f485bd0b0c075abec96b2e/a/y/ayala_super_large.jpg'},
        {name:'Salmom',desc:'Salmon are typically anadromous: they hatch in the shallow gravel beds of freshwater headstreams and spend their juvenile years in rivers, lake...',img:'https://bradleysfish.com/wp-content/uploads/2019/05/B2FE40A2-F3A7-493A-BB90-D0ACB35F08BE-min-min-1536x675.jpeg'},
        {name:'Lobster',desc:'Lobsters are malacostracans of the family Nephropidae or its synonym Homaridae. They have long bodies with muscular tails and live in crevices...',img:'https://www.seafoodsupplier.com.sg/wp-content/uploads/2021/02/shutterstock_1674929380.jpg'},

    ]);
    const handleProductShow=()=>{
        navigate('/products')
    }

    return (
        <div className="w-full h-full">
                    <div className='flex flex-row items-center'>
                    <span className='w-24 font-bold text-gray-600'>Products</span>
                    <span className='w-full h-0.5 bg-gray-300 rounded'></span>
                    </div>
            <div className="flex flex-col gap-5 py-5">
                {popularFish?.map((fish) => (
                    <div onClick={handleProductShow} key={fish} className="w-full h-72 border bg-white shadow-lg rounded-2xl flex-shrink-0 flex flex-col">
                        <img src={fish.img} alt="" className='md:w-3/12 w-full h-3/4 rounded-2xl' />
                        <p className='pt-1 ps-4 font-bold text-lg text-gray-800'>{fish.name}</p>
                        <p className='ps-4 text-xs text-gray-600 overflow-hidden'>{fish.desc}</p>
   
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Products;
