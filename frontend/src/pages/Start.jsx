import React from 'react'
import { Link } from 'react-router-dom'

const Start = () => {
  return (
    <div>
        <div className='bg-cover bg-center bg-[url(https://images.unsplash.com/photo-1619059558110-c45be64b73ae?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] h-screen pt-8 flex justify-between flex-col w-full '>
        <div className="flex items-center">
        <img className='w-10 mb-3' src="/logo.png" alt="" />
        <img className='w-20 mb-3' src="/logo_name.png" alt="" />
        </div>
            <div className='bg-white py-4 px-4 pb-7'>
                <h2 className='text-3xl font-bold'>Get Started with Uber</h2>
                <Link to = '/login'className='flex items-center justify-center w-full bg-black text-white py-3 rounded mt-5'>Continue</Link>
            </div>
        </div>
    </div>
  )
}

export default Start