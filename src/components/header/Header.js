import { Link, NavLink } from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { useState,useEffect } from 'react'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from '../../firebase/config'
import { toast } from 'react-toastify'
import { remove, set } from '../redux/Authslice'
import Showonlogin, { Showadmin, Showonlogout } from './hiddenlinks'





function Header() {
  const [displayname,setdisplayname]=useState('')
  const dispatch=useDispatch()
  const logoutuser=()=>{
        signOut(auth).then(()=>{
      toast.success('logout successfully.....')
    })
    .catch((error)=>{
      toast.error(error.message)
    })
    };
    useEffect(()=>{ onAuthStateChanged(auth,(user)=>{
        if (user){
          setdisplayname(user.displayName)
          dispatch(set({
            email:user.email,
            username:user.displayName,
            userid:user.uid,
          }))
          
        }
        else{
          setdisplayname('')
          dispatch(remove())
        }
      });
    },[dispatch,displayname]);
  



  return (
    <div >
        <div className='w-full h-20 bg-gray-500 fixed top-0 left-0 right-0 z-50'>
            <div className='flex justify-between items-center'>
                <h1 className='text-semibold text-white  py-7 px-5'>SHOPEeee</h1>
                <ul className='flex justify-end gap-10'>
            <li className='text-semibold text-gray-700 hover:text-gray-50 cursor:pointer duration-300'><Link to='/'><span>Home</span></Link></li>
            <li className='text-semibold text-gray-700 hover:text-gray-50 cursor:pointer duration-300'><Showonlogin><Link to='/order-history'><span>Orders</span></Link></Showonlogin></li>
             <li className='text-semibold text-gray-700 hover:text-gray-50 cursor:pointer duration-300'><Showonlogout><NavLink to='/login'>Login</NavLink></Showonlogout></li>
                <li className='text-semibold text-gray-700 hover:text-gray-50 cursor:pointer duration-300'><Showonlogout><Link to='/register'><span>Register</span></Link></Showonlogout></li>
                <li className='text-semibold text-gray-700 hover:text-gray-50 cursor:pointer duration-300'><Showonlogin><Link to='/cart'><span>Cart</span></Link></Showonlogin></li>
                <li className='text-semibold text-gray-700 hover:text-gray-50 cursor:pointer duration-300'><Showonlogin><button onClick={logoutuser}>Logout</button></Showonlogin></li>
                <li className='text-semibold text-gray-700 hover:text-gray-50 cursor:pointer duration-300'><Showadmin><Link to='/admin/home'>Admin</Link></Showadmin></li>
                <li></li>
                </ul>
            
            </div>
        </div>
    </div>
  )
}

export default Header