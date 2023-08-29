import React, { useEffect, useState } from 'react'
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector'
import { selectuserid } from '../../components/redux/Authslice'
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import { db } from '../../firebase/config'
import { useDispatch } from 'react-redux'
import { SAVE_ORDERS } from '../../components/redux/orderhistory'
import { selectbill, selectship } from '../../components/redux/shipbill'

function Orders() {
    const [items,setitems]=useState([])
    const dispatch=useDispatch()
    const userid=useSelector(selectuserid)
    const shippindaddress=useSelector(selectship)
    const billingaddress=useSelector(selectbill)
    console.log(shippindaddress)
    useEffect(()=>{
        const database = collection(db,'shopOrders');
        const q = query(database, orderBy("createdat",'desc'));
         onSnapshot(q, (snapshot) => {
          const data=snapshot.docs.map((doc)=>({
            id:doc.id,
            ...doc.data(),
          }))
         setitems(data)
         dispatch(SAVE_ORDERS(data))
         
      });
    },[dispatch])
    console.log(items)
  return (
    <div className='w-5/6'>
    
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Order History</h2>
      <div className="overflow-x-auto">
        <table className="table-auto w-full">
          <thead>
            <tr className="bg-blue-200 hover:bg-blue-300 transition-colors duration-300">
              <th className="py-2 px-4 text-left">Date</th>
              <th className="py-2 px-4 text-left">Order ID</th>
              <th className="py-2 px-4 text-left">Order Status</th>
              <th className="py-2 px-4 text-left">Time</th>
            </tr>
          </thead>
          <tbody>
            {items.map(order => (
              <tr key={order.id} className="border-b hover:bg-gray-100 transition-colors duration-300">
                <td className="py-3 px-4">{order.oredrdate} </td>
                <td className="py-3 px-4">{order.id}</td>
                <td className="py-3 px-4">{order.orderstatus}</td>
                <td className="py-3 px-4">{order.ordertime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>


    </div>
  )
}

export default Orders