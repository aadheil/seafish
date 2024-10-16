import { Icon } from '@iconify/react/dist/iconify.js'
import React, { useState } from 'react'

function Login() {
    const [isEmailLogin, setIsEmailLogin] = useState(true)
    const [isOtp, setIsOtp] = useState(false)

    const handleOtp = () => {
        setIsOtp(true)
    }

    return (
        <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gray-100 " style={{ fontFamily: 'Ropa Sans' }}>
            <div className="w-11/12 sm:w-7/12 md:w-5/12 lg:w-4/12 bg-white shadow-lg rounded-lg px-6 py-16">
                <h4 className="text-gray-800 font-bold text-2xl text-center" style={{ fontFamily: 'Chakra Petch' }}>Login Account</h4>

                <div className="flex flex-row bg-gray-200 px-1 w-full mt-6 rounded-full py-1 justify-center text-gray-800">
                    <div
                        className={`flex-1 flex justify-center items-center rounded-full transition-all duration-500 ${isEmailLogin ? 'bg-gray-100' : ''}`}
                    >
                        <button onClick={() => setIsEmailLogin(true)} className="py-2 w-full">Email</button>
                    </div>
                    <div
                        className={`flex-1 flex justify-center items-center rounded-full transition-all duration-500 ${!isEmailLogin ? 'bg-gray-100' : ''}`}
                    >
                        <button onClick={() => setIsEmailLogin(false)} className="py-2 w-full">Phone</button>
                    </div>
                </div>

                <div className="pt-8 w-full">
                    {isEmailLogin ? (
                        <input
                            type="email"
                            className="w-full h-12 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 text-gray-600 p-3 transition-all duration-300"
                            placeholder="Enter Email"
                        />
                    ) : (
                        <div className="flex flex-row gap-2">
                            <select
                                id="trim"
                                className="w-4/12 bg-white border-gray-300 border p-2 rounded-lg text-gray-500 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all duration-300"
                            >
                                <option value="">Country</option>
                                <option value="+91">India +91</option>
                                <option value="+971">UAE +971</option>
                            </select>
                            <input
                                type="text"
                                className="w-8/12 h-12 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 text-gray-600 p-3 transition-all duration-300"
                                placeholder="Enter Phone Number"
                            />
                        </div>
                    )}
                </div>

                <button
                    onClick={handleOtp}
                    className="mt-6 w-full flex flex-row items-center justify-center gap-1 bg-[#3A87B2] hover:bg-blue-400 rounded-lg h-12 text-white font-semibold transition-all duration-300"
                >
                   <span> Request OTP</span>
                   <Icon icon="tabler:arrow-right" />
                </button>

                <div className="flex w-full mt-8 justify-center text-gray-600">
                    <span>Not registered?</span>
                    <a href="/register" className="ml-1 text-[#3A87B2] hover:underline">Create an account</a>
                </div>
            </div>
        </div>
    )
}

export default Login
