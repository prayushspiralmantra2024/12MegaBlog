import React from 'react'
import { useDispatch } from 'react-redux'
import authServices from '../../appwrite/'
import {logout} from '../../store/authSlice'

const LogoutBtn = () => {
    const dispatch=useDispatch()
    const logoutHandler=()=>{
        authServices.logout.then(()=>{
            dispatch(logout())
        })
    }
    return (
    <div className='inline-block px-6 py-2 duration-200
    hover:bg-blue-100 rounded-full'>LogoutBtn</div>
  )
}

export default LogoutBtn