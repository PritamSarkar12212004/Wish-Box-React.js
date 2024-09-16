import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../components/auth/login/Login'
import Register from '../components/auth/register/Register'
function AuthRoute() {
  return (
      <Routes>
          <Route path='/auth/login' element={<Login/>}/>
          <Route path='/auth/register' element={<Register/>}/>
    </Routes>
  )
}

export default AuthRoute