import React from 'react'
import authService from '../appwrite/auth'
import {Link ,useNavigate} from 'react-router-dom'
import {login} from '../store/authSlice'
import {Button, Input, Logo} from './index.js'
import {useDispatch} from 'react-redux'
import {useForm} from 'react-hook-form' 

const Signup = () => {

  const navigate = useNavigate()
  const [error, setError] = useState("")
  const dispatch = useDispatch()
  const {register, handleSubmit} = useForm()
  const create=async(data)=>{
    setError("")
    try{
    const userData =await authService.getCurrentUser(data)
      if(userData){
        const userData=await authService.getCurrentUser()
      if(userData)dispatch(login(userData));
      navigate("/")
      } 
    
    }catch(error){

    }
  }
  return (
    <div>Signup</div>
  )
}

export default Signup