import React from 'react'
import {FaFacebook,FaYoutube,FaTwitter,FaHome} from 'react-icons/fa'
import {ImGithub } from 'react-icons/im'
import {MdLocationOn} from 'react-icons/md'
import {BsPersonFill,BsPaypal} from 'react-icons/bs'


function Footer() {
  return (
    <div className='bg-black  w-screen h-[210px] text-[#949494]'>
        <div className='max-w-screen-xl mx-auto grid grid-cols-4'>
        <div className=' flex flex-col gap-5'>

            <img className='w-32' src='https://1000logos.net/wp-content/uploads/2021/05/Harpers-Bazaar-logo-768x432.png' alt='lll'></img>
            <p className='text-white text-5m px-3 tracking-wide'>Rajesh@.com</p>
            <div className='flex gap-6 px-3 text-lg text-gray-400'>
            
            <ImGithub className='hover:text-white duration-300 cursor-pointer'/>
            <FaFacebook className='hover:text-white duration-300 cursor-pointer'/>
            <FaYoutube className='hover:text-white duration-300 cursor-pointer'/>
            <FaTwitter className='hover:text-white duration-300 cursor-pointer'/>
            <FaHome className='hover:text-white duration-300 cursor-pointer'/>
            
            </div>
        </div>

        <div>
             <h2 className='text-2xl text-white mb-4 font-semibold py-5'>Locate us</h2>
             <div className='flex flex-col text-base gap-2'>
                <p>address:cholasamudram</p>
                <p>phone:7981212220</p>
                <p>mobile:877997788877</p>
                <p>email:ry128037@gmail.com</p>
             </div>
        </div>
        <div>
        <h2 className='text-2xl text-white mb-4 font-semibold py-4'>Profile</h2>
        <div className='flex flex-col gap-2 text-base'>
        <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'><span><BsPersonFill/></span>my account</p>
        <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'><span><FaHome/></span>check out</p>
        <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'><span><BsPaypal/></span>my account</p>
        <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'><span><MdLocationOn/></span>Help &support</p>
        </div>
        </div>
        <div className='flex flex-col justify-center gap-3'>
           <input type='text' className='bg-transparent text-5m border px-4 py-2' placeholder='e-mail'/>
           <button className='text-5m border-t-0 text-white hover:bg-gray-500 cursor:pointer active:bg-white active:text-black'>Subscribe</button>

        </div>
        
        </div>
    </div>
  )
}

export default Footer