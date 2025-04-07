import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import {CaptainDataContext} from '../context/CaptainContext.jsx'
import { useContext } from 'react'
import axios from 'axios'


const CaptainSignup = () => {

    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    const [vehicleColor, setVehicleColor] = useState('');
    const [plateNumber, setPlateNumber] = useState('');
    const [vehicleCapacity, setVehicleCapacity] = useState('');
    const [vehicleType, setVehicleType] = useState('');

    const {captain, setCaptain} = useContext(CaptainDataContext)
    
  
    const submitHandler = async (e) => {
        e.preventDefault()
        
        const captainData = {
          fullname:{
            firstname:firstName,
            lastname:lastName
          },
          email:email,
          password:password,
          vehicle:{
            color:vehicleColor,
            plateNumber:plateNumber,
            capacity:vehicleCapacity,
            vehicleType:vehicleType
          }
        }

        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, captainData)
        if(response.status === 201){
          const data = response.data
          setCaptain(data)
          localStorage.setItem('token', data.token)
          navigate('/captain-home')
        }
        setEmail('')
        setPassword('')
        setFirstName('')
        setLastName('')
        setVehicleColor('')
        setPlateNumber('')
        setVehicleCapacity('')
        setVehicleType('')
    }
  return (
    <div className='p-6 h-screen flex flex-col justify-between' >

     <div>
     <div className="flex items-center">
        <img className='w-10 mb-3' src="/logo.png" alt="" />
        <img className='w-20 mb-3' src="/logo_name.png" alt="" />
        </div>
        <form onSubmit={(e)=>{
            submitHandler(e)
          }}>

          <h3 className='text-lg font-medium mb-2'>What's your name</h3>
          <div className='flex gap-4 mb-4'>

            <input 
            value={firstName}
            onChange={(e)=>setFirstName(e.target.value)}
            className='bg-[#eeeeee] rounded w-1/2 px-4 py-2 text-lg placeholder:text-base'
            required type="text" placeholder='First name' />

            <input 
            value={lastName}
            onChange={(e)=>setLastName(e.target.value)}
            className='bg-[#eeeeee] rounded w-1/2 px-4 py-2 text-lg placeholder:text-base'
            required type="text" placeholder='Last name' />
          </div>

          <h3 className='text-lg font-medium mb-2'>What's your email</h3>

          <input 
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          className='bg-[#eeeeee] rounded mb-4 px-4 py-2 w-full text-lg placeholder:text-base'
          required type="email" placeholder='email@example.com' />

          <h3 className='text-lg font-medium  mb-2'>Enter password</h3>

          <input 
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          className='bg-[#eeeeee] rounded mb-4 px-4 py-2 w-full text-lg placeholder:text-base'
          required type="password" placeholder='Password' />

            <h3 className='text-lg font-medium mb-2'>Vehicle Information</h3>

            <div className='flex gap-4 mb-4'>
            <input
              value={vehicleColor}
              onChange={(e) => setVehicleColor(e.target.value)}
              className='bg-[#eeeeee] rounded w-1/2 px-4 py-2 text-lg placeholder:text-base'
              required
              type="text"
              placeholder='Vehicle Color'
            />

            <input
              value={plateNumber}
              onChange={(e) => setPlateNumber(e.target.value)}
              className='bg-[#eeeeee] rounded w-1/2 px-4 py-2 text-lg placeholder:text-base'
              required
              type="text"
              placeholder='Plate Number'
            />
            </div>

            <div className='flex gap-4 mb-4'>
            <input
              value={vehicleCapacity}
              onChange={(e) => setVehicleCapacity(e.target.value)}
              className='bg-[#eeeeee] rounded w-1/2 px-4 py-2 text-lg placeholder:text-base'
              required
              type="number"
              placeholder='Vehicle Capacity'
            />

            <select
              value={vehicleType}
              onChange={(e) => setVehicleType(e.target.value)}
              className='bg-[#eeeeee] rounded w-1/2 px-4 py-2 text-lg placeholder:text-base'
              required
            >
              <option value="" disabled>Select Vehicle Type</option>
              <option value="car">Car</option>
              <option value="bike">Bike</option>
              <option value="auto">Auto</option>
            </select>
            </div>

          <button className='bg-[#111] text-white font-semibold mb-5 rounded px-4 py-2 w-full text-lg  '
          >Create Account</button>

          <p className='text-center mb-2'>Already have an account? <Link to ='/captain-login' className='text-blue-600 '>Login here</Link> </p>
        </form>
     </div>
     <div>
        <p className='text-[10px] leading-tight mt-2'>This site is protected by reCAPTCHA and the <span className='underline'>Google Privecy Policy</span> and <span className='underline'>Terms of Services apply</span></p>
     </div>

    </div>
  )
}

export default CaptainSignup