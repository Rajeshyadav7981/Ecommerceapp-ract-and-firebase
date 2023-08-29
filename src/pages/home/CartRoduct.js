import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch} from 'react-redux'
import { Add_to_cart,remove_from_cart } from '../../components/redux/cartSlice'




function CartRoduct(roduct) {

  const dispatch=useDispatch()
  const handleclickk=({roduct})=>{ 
    dispatch(remove_from_cart(roduct))
}

  return (
    <div className='group border-[1px] border-gray-600 object-cover relative rounded-lg overflow-hidden bg-white shadow-md transition-transform duration-300 hover:scale-105'>
  <div className='w-60 h-60 cursor-pointer overflow-hidden'>
    <img className='w-full h-full object-cover group-hover:scale-110 duration-500' src={roduct.roduct.imageurl} alt='img' />
  </div>
  <div className='flex gap-20 p-4'>
    <div className='font-base font-semibold text-gray-800'>
      {roduct.roduct.name}
    </div>
    <div className='font-semibold text-gray-700'>
      ${roduct.roduct.price}
    </div>
  </div>
  <div className='flex gap-10 p-4'>
    <div className='text-gray-600'>
      {roduct.roduct.category}
    </div>
    <div className='absolute top-0 right-0'>
      <p className='bg-black text-white font-semibold px-6 py-1'>Sale</p>
    </div>
    <button
    className='w-full py-2 bg-gray-400 text-white rounded-b-lg hover:bg-blue-600'
    onClick={() => handleclickk(roduct)}
  >
    remove from Cart
  </button>
  </div>
</div>

  )
}

export default CartRoduct