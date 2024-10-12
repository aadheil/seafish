import { Icon } from '@iconify/react/dist/iconify.js';
import React, { useState } from 'react';

function ProductDets() {
    const [quantity, setQuantity] = useState(1);
    const [address, setAddress] = useState("");
    const [preservation, setPreservation] = useState("");
    const [cut, setCut] = useState("");
    const [trim, setTrim] = useState("");
    const [skin, setSkin] = useState("");
    const [email, setEmail] = useState("");

    const handleAddToCart = () => {
        // Handle add to cart logic
        console.log(`Product added to cart with details: 
          Quantity: ${quantity}, 
          Address: ${address}, 
          Preservation: ${preservation}, 
          Cut: ${cut}, 
          Trim: ${trim}, 
          Skin: ${skin}, 
          Email: ${email}`);
    };

    return (
        <div className='bg-gray-100 flex flex-col items-center h-full w-full mb-10' style={{ fontFamily: 'Ropa sans' }}>
            <div className='w-11/12 flex flex-col pt-3'>
            <span className='pb-3 flex flex-row gap-1 items-center text-gray-500'><Icon icon="ion:chevron-back" /><span>Home</span></span>
                {/* Image */}
                <div className='w-full h-52 rounded-2xl shadow-lg'>
                    <img src="https://bradleysfish.com/wp-content/uploads/2019/05/B2FE40A2-F3A7-493A-BB90-D0ACB35F08BE-min-min-1536x675.jpeg" className='w-full h-full rounded-2xl' alt="Salmon" />
                </div>

                {/* Product Name and Description */}
                <h4 className='font-bold text-gray-900 text-lg ps-1'>Salmon</h4>
                <p className='text-gray-500 text-sm ps-1'>
                    Mackerel species typically have deeply forked tails and vertical "tiger-like" stripes on their backs with an iridescent green-blue quality.
                </p>

                {/* Preservation Method */}
                <label className='font-medium text-gray-700 pt-3' htmlFor="preservation">Preservation Method:</label>
                <select
                    id="preservation"
                    className="w-full border p-2 rounded-lg mt-2 text-gray-500"
                    value={preservation}
                    onChange={(e) => setPreservation(e.target.value)}
                >
                    <option value="">Select Preservation Method</option>
                    <option value="Frozen">Frozen</option>
                    <option value="Fresh">Fresh</option>
                    <option value="Canned">Canned</option>
                    <option value="Smoked">Smoked</option>
                </select>

                {/* Cut Selection */}
                <label className='font-medium text-gray-700 pt-3' htmlFor="cut">Cut:</label>
                <select
                    id="cut"
                    className="w-full border p-2 rounded-lg mt-2 text-gray-500"
                    value={cut}
                    onChange={(e) => setCut(e.target.value)}
                >
                    <option value="">Select Cut</option>
                    <option value="Whole">Whole</option>
                    <option value="Fillet">Fillet</option>
                    <option value="Steak">Steak</option>
                </select>

                {/* Trim Selection */}
                <label className='font-medium text-gray-700 pt-3' htmlFor="trim">Trim:</label>
                <select
                    id="trim"
                    className="w-full border p-2 rounded-lg mt-2 text-gray-500"
                    value={trim}
                    onChange={(e) => setTrim(e.target.value)}
                >
                    <option value="">Select Trim</option>
                    <option value="Trimmed">Trimmed</option>
                    <option value="Untrimmed">Untrimmed</option>
                </select>

                {/* Skin Selection */}
                <label className='font-medium text-gray-700 pt-3' htmlFor="skin">Skin:</label>
                <select
                    id="skin"
                    className="w-full border p-2 rounded-lg mt-2 text-gray-500"
                    value={skin}
                    onChange={(e) => setSkin(e.target.value)}
                >
                    <option value="">Select Skin Option</option>
                    <option value="Skin On">Skin On</option>
                    <option value="Skin Off">Skin Off</option>
                </select>

                {/* <hr className='mt-5'/>Delivery details */}

                <div className='w-full flex flex-row mt-5 items-center'>
                    <span className='w-4/12 h-[0.5px] bg-gray-600'></span>
                    <span className='w-4/12 ps-4 text-gray-500'>Personal details</span>
                    <span className='w-4/12 h-[0.5px] bg-gray-600'></span>
                </div>
                

                {/* Email Input */}
                <label className='font-medium text-gray-700 pt-3' htmlFor="email">Email:</label>
                <input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    className="w-full border p-2 rounded-lg mt-2"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                {/* Address Input */}
                <label className='font-medium text-gray-700 pt-3' htmlFor="address">Delivery Address:</label>
                <textarea
                    id="address"
                    type="text"
                    placeholder="Enter delivery address"
                    className="w-full border p-2 rounded-lg mt-2"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                />

                {/* Quantity Input */}
                <label className='font-medium text-gray-700 pt-3' htmlFor="quantity">Quantity:</label>
               <div className='flex flex-row gap-5 items-center'>
               <input
                    id="quantity"
                    type="number"
                    min="1"
                    className="w-9/12 border p-2 rounded-lg mt-2"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                />
                <span className='bg-white rounded-lg w-3/12 h-10 flex items-center border justify-center mt-2 font-bold text-2xl'><Icon icon="mingcute:add-fill" className='text-gray-800' /></span>
               </div>

                {/* Add to Cart Button */}
                <button
                    onClick={handleAddToCart}
                    className='w-full bg-blue-500 text-white p-3 rounded-lg mt-5 font-bold'
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
}

export default ProductDets;
