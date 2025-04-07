import React, { useState,useContext} from 'react'
import { Link,useNavigate} from 'react-router-dom'
import {UserDataContext} from '../context/UserContext.jsx'
import axios from 'axios'


const UserLogin = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  const {user, setUser} = useContext(UserDataContext)
  const navigate = useNavigate()

  const submitHandler = async (e) => {
      e.preventDefault()
      const userData ={
        email:email,
        password:password
      }

      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`, userData)
      if(response.status === 200){
        const data= response.data
        setUser(data.user)
        localStorage.setItem('token', data.token)
        navigate('/home')
      }

      setEmail('')
      setPassword('')
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

          <h3 className='text-lg font-medium mb-2'>What's your email</h3>

          <input 

          value={email}
          onChange={(e)=>setEmail(e.target.value)}

          className='bg-[#eeeeee] rounded mb-7 px-4 py-2 w-full text-lg placeholder:text-base'
          required type="email" placeholder='email@example.com' />

          <h3 className='text-lg font-medium  mb-2'>Enter password</h3>

          <input 
          value={password}
          onChange={(e)=>setPassword(e.target.value)}

          className='bg-[#eeeeee] rounded mb-7 px-4 py-2 w-full text-lg placeholder:text-base'
          required type="password" placeholder='Password' />

          <button className='bg-[#111] text-white font-semibold mb-7 rounded px-4 py-2 w-full text-lg  '
          >Login</button>

          <p className='text-center'>New here? <Link to ='/signup' className='text-blue-600 '>Create new Account</Link> </p>
        </form>
     </div>
     <div>
        <Link to= '/captain-login'
         className='bg-[#10b461] text-white flex items-center justify-center font-semibold mb-5 rounded px-4 py-2 w-full text-lg -mt-24 '
        >Sign in as Captain</Link>
     </div>

    </div>
  )
}

export default UserLogin