import React from 'react'
import { useDispatch } from 'react-redux'

import { useState,useEffect } from 'react'
import {MdOutlineStar} from 'react-icons/md'
import { useLocation } from 'react-router-dom'
import { Add_to_cart } from '../../components/redux/cartSlice'

function Single({items}) {
    const[details,setdetails]=useState({})
    const location=useLocation()
    const dispatch=useDispatch()
    const handlecart=()=>{
        dispatch(Add_to_cart(details))
    }

    useEffect(()=>{
        setdetails(location.state.item.roduct)
        console.log(location.state.item.roduct)
    },[location])
  return (
    <div className='py-20'>
     <div className='flex max-w-screen-xl mx-auto my-10 gap-10'>
        <div className='relative'>
           <img className='w-full  h-[400px] object-cover' src={details.imageurl} alt='item'></img>
           <div className='absolute top-0 right-0'>
            <p className='bg-black text-white font-semibold px-6 py-1'>Sale</p>
           </div>
        </div>
        <div className='w-3/5 flex flex-col justify-center gap-8 '>
            <div >
                <h1 className='text-4xl font-semibold'>{details.title}</h1>
                <p>{details.price}</p>
            </div>
            <div className='flex items-center text-base gap-4'>
               <div className='flex gap-2'>
                <MdOutlineStar/>
                <MdOutlineStar/>
                <MdOutlineStar/>
                <MdOutlineStar/>
                <MdOutlineStar/>
                </div>
                <p className='text-base text-gray-700'>1 Customer Review</p>

            </div>
            <div>{details.description}</div>
            <div className='w-52 flex items-center justify-between text-gray-500  border p-3'>
                <div className='flex gap-7 text-5m item-center font-semibold'>
                 <p className='text-5m'>Quantity</p>
                 <div className='flex gap-4'>
                 <button className='border h-5 font-normal text-lg items-center justify-center
                  px-2 hover:bg-gray-700 hover:text-white cursor-pointer
                   duration-300 active:bg-black '>-</button>
                 <span>1</span>
                 <button className='border h-5 font-normal text-lg items-center justify-center
                  px-2 hover:bg-gray-700 hover:text-white cursor-pointer
                   duration-300 active:bg-black'>+</button>
                 </div>
                 <div>
                 <button className=' text-black w-40 h-8 hover:text-white hover:bg-black duration-300 cursor-pointer' onClick={handlecart}>Add to Cart</button>
                 </div>
                </div>
                

               </div>
                <div>
                    <span className='text-black '>Brand : <span className='text-gray-700 capitalize'>{details.brand}</span></span>
                </div>


        </div>
    </div>
    </div>
  )
}

export default Single