import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'

const ProtectedRoutes = () => {
  
  const trainer = useSelector(states => states.trainer) 

  if(trainer.length >= 3) {
    return <Outlet/>
  }else{
    return <Navigate to='/' />
  }
}

export default ProtectedRoutes