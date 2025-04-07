import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import {UserDataContext} from '../context/UserContext.jsx'
import { useContext } from 'react'

const UserSignup = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [userData, setUserData] = useState({})

  const navigate = useNavigate()

  const {user, setUser} = React.useContext(UserDataContext)

  const submitHandler = async (e) => {
      e.preventDefault()
      const newUser = {
        fullname:{
          firstname:firstName,
          lastname:lastName
        },
        email:email,
        password:password
      }
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUser)

      if(response.status === 201){
        const data= response.data
        setUser(data.user)
        localStorage.setItem('token', data.token)
        navigate('/home')
      }

      setEmail('')
      setPassword('')
      setFirstName('')
      setLastName('')
  }
  return (
    <div className='p-7 h-screen flex flex-col justify-between' >

     <div>
     <div className="flex items-center">
        <img className='w-10 mb-3' src="/logo.png" alt="" />
        <img className='w-20 mb-3' src="/logo_name.png" alt="" />
        </div>
        <form onSubmit={(e)=>{
            submitHandler(e)
          }}>

          <h3 className='text-lg font-medium mb-2'>What's your name</h3>
          <div className='flex gap-4 mb-5'>

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
          className='bg-[#eeeeee] rounded mb-5 px-4 py-2 w-full text-lg placeholder:text-base'
          required type="email" placeholder='email@example.com' />

          <h3 className='text-lg font-medium  mb-2'>Enter password</h3>

          <input 
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          className='bg-[#eeeeee] rounded mb-5 px-4 py-2 w-full text-lg placeholder:text-base'
          required type="password" placeholder='Password' />

          <button className='bg-[#111] text-white font-semibold mb-7 rounded px-4 py-2 w-full text-lg  '
          >Create Account</button>

          <p className='text-center'>Already have an account? <Link to ='/login' className='text-blue-600 '>Login here</Link> </p>
        </form>
     </div>
     <div>
        <p className='text-[10px] leading-tight'>By proceeding, you consent to get calls, Whatsapp or SMS message, including by automated means, from UBER and its affiliates to the number provided.</p>
     </div>

    </div>
  )
}

export default UserSignup