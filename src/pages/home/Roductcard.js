import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch} from 'react-redux'
import { Add_to_cart } from '../../components/redux/cartSlice'
import {useSelector } from "react-redux";
import { selectemail, selectisloggedin } from '../../components/redux/Authslice';
import { toast } from 'react-toastify';

function Roductcard(roduct) {
  const user=useSelector(selectisloggedin)
  const dispatch=useDispatch()
  useEffect(()=>{
    console.log(roduct)
  })
  const handleclickk=({roduct})=>{
    if (user){
      dispatch(Add_to_cart(roduct))
      toast.success('Product Added to Cart')

    }
    else{
      toast.error('Please Logged in to add to Cart...')
    }
   
}
  /*const handleclick=()=>{
    history.push(`/single/${roduct.id}`,{
    state:{
      item:roduct

    }

    })
  }*/
  return (
    <div className='group bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105' style={{ borderRadius: '30px' }}>
  <div className='w-60 h-60 cursor-pointer overflow-hidden'>
    <img
      className='w-full h-full object-cover group-hover:scale-105 duration-300'
      src={roduct.roduct.imageurl}
      alt='Product'
    />
  </div>
  <div className='p-4 flex gap-4'>
    <div className='font-semibold text-lg py-0.5'>{roduct.roduct.name}</div>

    <div className='text-gray-500 mt-1'>₹{roduct.roduct.price}</div>
  </div>
  <div className='absolute top-0 right-0'>
    <p className='bg-red-500 text-white font-semibold px-3 py-1 rounded-tr-lg'>Sale</p>
  </div>
  <button
    className='w-full py-2 bg-gray-400 text-white rounded-b-lg hover:bg-white hover:text-gray-500'
    onClick={() => handleclickk(roduct)}
  >
    Add to Cart
  </button>
</div>

  )
}

export default Roductcard