import { sendPasswordResetEmail } from 'firebase/auth'
import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../../firebase/config'
import { toast } from 'react-toastify'

function Reset() {
  const resetpassword=(e)=>{
    e.preventDefault()
    sendPasswordResetEmail(auth,email).then(()=>{
      toast.success('check emaill......')
    })
    .catch((error)=>{
      toast.error(error.message)
    })

  }
  const[email,setemail]=useState('')
  return (
    <div className='flex justify-center items-center h-screen bg-gray-100'>
  <div className='w-1/2 bg-white shadow-md rounded px-8 py-6 space-y-4'>
    <h1 className='text-2xl font-bold'>Reset Password</h1>
    
    <input
      type='text'
      placeholder='Enter email'
      required
      value={email}
      onChange={(e) => {
        setemail(e.target.value);
      }}
      className='w-full border rounded px-3 py-2'
    />
    
    <button
      onClick={resetpassword}
      className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'
    >
      Reset Password
    </button>
    <br></br>
    <Link to='/login' className='text-blue-500'>
      Login...
    </Link>
    <span className='mx-2 text-gray-500'>...............</span>
    <Link to='/register' className='text-blue-500'>
      Register....
    </Link>
  </div>
</div>

  )
}

export default Reset