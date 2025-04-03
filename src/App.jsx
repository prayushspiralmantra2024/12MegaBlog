import { useEffect, useState } from 'react' 
import './App.css'
import { useDispatch } from 'react-redux'
import authService from './appwrite/auth'
import {login, logout} from "./store/authSlice"
import { Footer, Header } from './Components'
import { Outlet } from 'react-router-dom'


function App() {
  
// const[loading,setLoading]=useState(false)
// const dispatch=useDispatch();
  // console.log(import.meta.env.VITE_APPWRITE_URL)
  // useEffect(() => {
  //   authService.getCurrentUser()
  //   .then((userData) => {
  //     if (userData) {
  //       dispatch(login({userData}))
  //     } else {
  //       dispatch(logout())
  //     }
  //   })
  //   .catch((error) => {
  //     debugger
  //     console.log(error);
  //     setLoading(false)
  //   })
  //   .finally(() => setLoading(false))
  // }, [])
  
  
  return  (

    // <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
    //   <div className='w-full block'>
    //     <Header/>
    //     <main>
    //       {/* <Outlet/> */}
    //     </main>
    //     <Footer/>
    //   </div>
    // </div>
    <>
    <div>Satyam   </div>
    <Header/>
    <Footer/>
    </>

   
  )
}

export default App
