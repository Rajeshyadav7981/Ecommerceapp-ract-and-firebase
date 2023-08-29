import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/config';
import { useNavigate } from 'react-router-dom';
import { Footer } from '../../components';

function Login() {
    const [useremail,setuseremail]=useState('')
    const [userPassword,setuserPassword]=useState('')
    const history=useNavigate()
   const loginuser= (e) => { 
          e.preventDefault()
          signInWithEmailAndPassword(auth,useremail,userPassword).then((userCredentials)=>{
          
            toast.success('login successfully')
            history('/')
          })
          .catch((error)=>{
            toast.error(toast.error)
          });

    }
  return (
    <>
    <ToastContainer/>
    <div className='flex justify-center items-center h-screen bg-gray-100'>
  <form onSubmit={loginuser} className='bg-white shadow-md rounded px-8 py-6 space-y-4'>
    <input
      type='text'
      placeholder='Enter email'
      onChange={(event) => {
        setuseremail(event.target.value);
      }}
      required
      className='w-full border rounded px-3 py-2'
    />
    
    <input
      type='password'
      placeholder='Enter password'
      onChange={(event) => {
        setuserPassword(event.target.value);
      }}
      required
      className='w-full border rounded px-3 py-2'
    />

    <button type='submit' className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'>
      Login
    </button>
    
    <Link to='/reset' className='text-blue-500'>
      Reset Password !!!!
    </Link>
    <br></br>
    
    <button className='bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600'>
      Login with Google
    </button>
    
    <p>
      Don't have an account? <Link to='/register' className='text-blue-500'>Register</Link>
    </p>
  </form>
</div>
<Footer/>

    </>
  )
}

export default Login