import React, { useEffect } from 'react'
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import UserLogin from './pages/UserLogin'
import UserSignup from './pages/UserSignup'
import CaptainLogin from './pages/CaptainLogin'
import CaptainSignup from './pages/CaptainSignup'
import Start from './pages/Start'
import UserProtectWrapper from './pages/UserProtectWrapper'
import UserLogout from './pages/UserLogout'
import CaptainHome from './pages/CaptainHome'
import CaptainProtectWrapper from './pages/CaptainProtectWrapper'
import CaptainLogout from './pages/CaptainLogout'
import Riding from './pages/Riding'

const App = () => {
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const token = localStorage.getItem('token')
    const currentPath = location.pathname

    // If logged in and visiting public routes, redirect to /home
    const publicRoutes = ['/', '/login', '/signup']
    if (token && publicRoutes.includes(currentPath)) {
      navigate('/home')
    }

    // If not logged in and trying to access protected user routes
    const protectedRoutes = ['/home', '/users/logout']
    if (!token && protectedRoutes.includes(currentPath)) {
      navigate('/login')
    }
  }, [location.pathname])

  return (
    <div>
      <Routes>
        <Route path='/' element={<Start />} />
        <Route path='/riding' element={<Riding />} />

        {/* Public routes (redirect if already logged in) */}
        <Route path='/login' element={<UserLogin />} />
        <Route path='/signup' element={<UserSignup />} />
        <Route path='/captain-login' element={<CaptainLogin />} />
        <Route path='/captain-signup' element={<CaptainSignup />} />

        {/* Protected user routes */}
        <Route path='/home' element={
          <UserProtectWrapper>
            <Home />
          </UserProtectWrapper>
        } />
        <Route path='/user/logout' element={
          <UserProtectWrapper>
            <UserLogout />
          </UserProtectWrapper>
        } />

        {/* Protected captain routes */}
        <Route path='/captain-home' element={
          <CaptainProtectWrapper>
            <CaptainHome />
          </CaptainProtectWrapper>
        } />
        <Route path='/captain/logout' element={
          <CaptainProtectWrapper>
            <CaptainLogout />
          </CaptainProtectWrapper>
        } />
      </Routes>
    </div>
  )
}

export default App
