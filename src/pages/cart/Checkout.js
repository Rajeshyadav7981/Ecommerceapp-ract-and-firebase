import React, { useState, useEffect } from "react";
import { API_URL } from "../../striprkey";  // Make sure this path is correct
import { useLocation } from "react-router-dom";
import axios from 'axios';  // Import axios for making API requests
import QueryString from 'query-string';
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { CART_TOTAL_AMOUNT, selectcartquantity, selecttotalproducts } from "../../components/redux/cartSlice";
import { selectship } from "../../components/redux/shipbill";

export default function Checkout() {
  const dispatch=useDispatch()
  const location = useLocation();
  const dataa = useSelector(state => state.cart.items);
  const shippp = useSelector(selectship);
  console.log(shippp)
  const qa = useSelector(selectcartquantity);
  const qaa = useSelector(selecttotalproducts);
  console.log(qaa)
  
  return (
    <section>
      <form action={`${API_URL}/api/stripe/create-checkout-session`} method="POST">
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
              
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    <div className="py-20 bg-white rounded shadow">
        <h2 className="text-2xl font-semibold mb-4 hover:text-blue-500">Checkout Summary</h2>
        <div className="mb-4">
          <p>Total Products:{qaa}</p>
          <p>Total Price: ₹ {qa.toFixed(2)}</p>
          <p></p>
          <hr className="my-2" />
          <p className="font-semibold"></p>
          <button className="mt-6 px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600 animate__animated animate__fadeIn animate__delay-1s" type="submit">Checkout</button>
        </div>
        
      </div>
    
  </div>
  
      </form>
    </section>
  );
}
