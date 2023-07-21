import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

function CheckAuth() {
  const {auth} = useAuth();
  const location = useLocation();
  return (
      auth?.data?.token ? <Outlet/> : <Navigate to="/login" state={{from: location}} replace/>
    )
}

export default CheckAuth;