
import { createUserWithEmailAndPassword } from 'firebase/auth';
import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { auth } from '../../firebase/config';
import { useNavigate } from 'react-router-dom';
import { updateProfile } from 'firebase/auth';
import { Footer } from '../../components';


function Register() {
    const [useremail,setuseremail]=useState('')
    const [userPasswordn1,setuserPasswordn1]=useState('')
    const [userPasswordn2,setuserPasswordn2]=useState('')
    const [usename,setusername]=useState('')
    const history=useNavigate()

    const registeruser= (e) => { 
          e.preventDefault()
          if (userPasswordn1!==userPasswordn2){
            toast.error('passwor do not match...')
          }
          else{
           createUserWithEmailAndPassword(auth,useremail,userPasswordn1).then((userCredential)=>{
            const res=userCredential;
            updateProfile(res.user,{
              displayName:usename,
              
             });
            toast.success('register successfully...')
            history('/')
            
          })
          .catch((error)=>{
            toast.error(toast.error)
          });
        }
      

     };
  return (
    <>
    <ToastContainer/>
    <div className='flex justify-center items-center h-screen bg-gray-100'>
  <form onSubmit={registeruser} className='bg-white shadow-md rounded px-8 py-6 space-y-4'>
    <input
      type='text'
      onChange={(e) => {
        setusername(e.target.value);
      }}
      placeholder='Enter username'
      className='w-full border rounded px-3 py-2'
    />

    <input
      type='text'
      placeholder='Enter email'
      onChange={(event) => {
        setuseremail(event.target.value);
      }}
      required
      value={useremail}
      className='w-full border rounded px-3 py-2'
    />

    <input
      type='password'
      placeholder='Enter password'
      onChange={(event) => {
        setuserPasswordn1(event.target.value);
      }}
      required
      value={userPasswordn1}
      className='w-full border rounded px-3 py-2'
    />

    <input
      type='password'
      placeholder='Confirm password'
      onChange={(event) => {
        setuserPasswordn2(event.target.value);
      }}
      required
      value={userPasswordn2}
      className='w-full border rounded px-3 py-2'
    />

    <button
      type='submit'
      className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'
    >
      Register
    </button>
    <br></br>
    <Link to='/login' className='text-blue-500'>
      Already a member? Login here.
    </Link>
  </form>
  <div className='mt-4 text-center'>
  </div>
</div>
<Footer/>

    </>
  )
}

export default Register