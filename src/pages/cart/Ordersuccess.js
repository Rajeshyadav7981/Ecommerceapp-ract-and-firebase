import React from 'react'
import { Link } from 'react-router-dom'

function Ordersuccess() {
  return (
    <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="bg-white p-8 rounded shadow-md text-center">
        <h1 class="text-2xl font-semibold mb-4">Order placed Successfully.....</h1>
        <button class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"><Link to='/order-history'>View Orders</Link></button>
    </div>
</div>

  )
}

export default Ordersuccess