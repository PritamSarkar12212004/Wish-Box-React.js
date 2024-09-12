import React from 'react'
import { Route, Routes } from 'react-router-dom'
import PopUp from '../components/auth/PopUpWindow/PopUp'
import Login from '../components/auth/login/Login'

function AuthRoute() {
  return (
      <Routes>
          <Route path='/auth/login' element={<Login/>}/>
    </Routes>
  )
}

export default AuthRoute