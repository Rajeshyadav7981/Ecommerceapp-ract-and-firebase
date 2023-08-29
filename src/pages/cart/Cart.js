import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CART_TOTAL_AMOUNT, CART_TOTAL_PRODUCTS, remove_from_cart, selectcartitems, selecttotalproducts } from '../../components/redux/cartSlice'
import CartRoduct from '../home/CartRoduct'
import { CLEAR_CART } from '../../components/redux/cartSlice'
import { selectcartquantity } from '../../components/redux/cartSlice'
import { Link } from 'react-router-dom'

function Cart() {
  const dataa = useSelector(state => state.cart.items);
  const qa = useSelector(selectcartquantity);
  const qaa = useSelector(selecttotalproducts);
  const dispatch=useDispatch()

  const delcart=()=>{
    dispatch(CLEAR_CART())
  }
  const [show,setshow]=useState(true)
  useState(()=>{
    if (dataa.length==0){
      setshow(false)
    }else{
      setshow(true)
    }
    dispatch(CART_TOTAL_PRODUCTS())
  },[dataa])
 useEffect(()=>{
  console.log(dataa)
  dispatch(CART_TOTAL_AMOUNT())
 },[dataa,useSelector])
 const handlereset=()=>{
  dispatch(CLEAR_CART())
 }
 const handledel=(product)=>{
  dispatch(remove_from_cart(product))
  console.log(dataa)
 }
 const CheckoutSummary = ({ totalPrice, totalProducts }) => {
  return (
    <div className="py-20 bg-white rounded shadow">
      <h2 className="text-2xl font-semibold mb-4 hover:text-blue-500">Checkout Summary</h2>
      <div className="mb-4">
        <p>Total Products: {totalProducts}</p>
        <p>Total Price: ₹ {totalPrice.toFixed(2)}</p>
        <p></p>
        <hr className="my-2" />
        <p className="font-semibold"></p>
      </div>
      <button class="mt-6 px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600 animate__animated animate__fadeIn animate__delay-1s" id="checkout-button"><Link to='/checkoutsbilling'>Checkout</Link></button>
    </div>
  );
};
 
  return (
  <div class="w-full max-w-3xl mx-auto p-4">
    <h2 class="text-3xl font-semibold mb-6 animate__animated animate__fadeIn">Your Cart</h2>
    <table class="w-full table-auto">
      <thead>
        <tr class="bg-gray-200">
          <th class="px-4 py-2">Image</th>
          <th class="px-4 py-2">Product</th>
          <th class="px-4 py-2">Price</th>
          <th class="px-4 py-2">Quantity</th>
          <th class="px-4 py-2">Total</th>
          <th class="px-4 py-2">Action</th>
        </tr>
      </thead>
      <tbody id="cart-items">
      {dataa.map((product, id) => (
          <tr key={id} className='transition-all hover:bg-gray-100'>
            <td className='px-4 py-2'>
              <img
                src={product.imageurl}
                width={100}
                alt={product.name}
                className='max-h-24 object-cover rounded'
              />
            </td>
            <td className='px-4 py-2'>{product.name}</td>
            <td className='px-4 py-2'>₹ {(product.price).toFixed(2)}</td>
            <td className='px-4 py-2'>{product.cartquantity}</td>
            <td className='px-4 py-2'>₹ {(product.price*product.cartquantity).toFixed(2)}</td>
            <td className='px-4 py-2 flex gap-2'>
              <p className='cursor-pointer text-red-500 hover:text-red-700 transition-colors' onClick={()=>{handledel(product)}}>del</p>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    
    { show && <CheckoutSummary totalPrice={qa} totalProducts={qaa}/>}
   { show && <button className='mt-6 px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600 animate__animated animate__fadeIn animate__delay-1s" id="checkout-button' onClick={delcart}>delete cart</button>}
   {!show && <p className='text-2xl'>Continue...Shopping...</p>}
   
  </div>

  
  )
  
}

export default Cart