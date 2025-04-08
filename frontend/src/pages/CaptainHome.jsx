import React from 'react'
import { Link } from 'react-router-dom'

const CaptainHome = () => {
  return (
    <div className='h-screen'>
        <div className='fixed p-4 top-0 flex items-center justify-between w-full'>
          {/* Left side: logos */}
          <div className="flex items-center ">
            <img className='w-10' src="/logo.png" alt="logo" />
            <img className='w-20' src="/logo_name.png" alt="logo name" />
          </div>

          {/* Right side: logout icon */}
          <Link to='/home' className='h-10 w-10 bg-white flex items-center justify-center rounded-full'>
            <i className="text-lg font-medium ri-logout-box-r-line"></i>
          </Link>
        </div>

        <div className='h-3/5 '>
            {/* image for temporary use */}
            <img className='h-full w-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />
        </div>
        <div className='h-2/5 p-5'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center justify-start gap-3'>
              <img className='h-10 w-10 rounded-full object-cover' src="/Driver.png" alt="driver" />
              <h4 className='text-lg font-medium'>Saikat Mahata</h4>
            </div>
            <div>
              <h4 className='text-xl font-semibold'>₹295.20</h4>
              <p className='text-sm text-gray-600'>Earned</p>
            </div>
          </div>
          <div className='flex p-3 mt-6 bg-gray-50 rounded-md items-center justify-between gap-4'>
            <div className='text-center'>
              <i className="text-3xl mb-2 font-thin ri-time-line"></i>
              <h5 className='text-lg font-medium'>10.2</h5>
              <p className='text-sm text-gray-600'>Hours Online</p>
            </div>
            <div className='text-center'>
              <i className="text-3xl mb-2 font-thin ri-speed-up-line"></i>
              <h5 className='text-lg font-medium'>10.2</h5>
              <p className='text-sm text-gray-600'>Hours Online</p>
            </div>
            <div className='text-center'>
              <i className='text-3xl mb-2 font-thin ri-booklet-line'></i>
              <h5 className='text-lg font-medium'>10.2</h5>
              <p className='text-sm text-gray-600'>Hours Online</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default CaptainHome