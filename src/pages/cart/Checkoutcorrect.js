import React, { useEffect, useState } from 'react'
import QueryString from 'query-string';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { CART_TOTAL_AMOUNT, CLEAR_CART, selectcartitems, selectcartquantity } from '../../components/redux/cartSlice';
import { selectbill, selectship } from '../../components/redux/shipbill';
import { selectemail, selectuserid } from '../../components/redux/Authslice';
import { Timestamp, addDoc, collection } from 'firebase/firestore';
import { toast } from 'react-toastify';
import { db } from '../../firebase/config';
import { useNavigate } from 'react-router-dom';
function Checkoutcorrect() {
    const location=useLocation()
    const [ex,setex]=useState(null)
    const dispatch=useDispatch()
    const [values,setvalues]=useState({})
    const shippindaddress=useSelector(selectship)
    const billingaddress=useSelector(selectbill)
    const userid=useSelector(selectuserid)
    const useremail=useSelector(selectemail)
    const totalamount=useSelector(selectcartquantity)
    const cartitems=useSelector(selectcartitems)
    const history=useNavigate()
    const today=new Date()
    const date=today.toDateString()
    const time=today.toLocaleDateString()
    console.log(shippindaddress)
    const orderconfig={
            userid,
            useremail,
            oredrdate:date,
            ordertime:time,
            oredramount:totalamount,
            orderstatus:'order placed...',
            cartitems,
            shippindaddress,
            billingaddress,
            createdat:Timestamp.now().toDate()
          }
        useEffect(()=>{
          setex(0)
        },[])
    useEffect(() => {
        dispatch(CART_TOTAL_AMOUNT())
        const valuess = QueryString.parse(location.search);
        setvalues(valuess)
        if (cartitems.length<=0){
          history('/')
        }
        if (values.success) {
          console.log("Order placed! You will receive an email confirmation.");
          const today=new Date()
          const date=today.toDateString()
          const time=today.toLocaleDateString()
          const orderconfig={
            userid:userid,
            useremail:useremail,
            oredrdate:date,
            ordertime:time,
            orderamount:totalamount,
            orderstatus:'order placed...',
            cartitems,
            shippindaddress,
            billingaddress,
            createdat:Timestamp.now().toDate()
          }
          
          try{
            addDoc(collection(db,'shopOrders'),orderconfig)
            toast.success('order placed..........')
            dispatch(CLEAR_CART())
            
            history('/order-success')

          }catch(error){
            toast.error(error.error)
            history('/checkout')
          }
        }
        if (values.canceled) {
          console.log("Order canceled -- continue to shop around and checkout when you're ready.");
        }
      }, [ex]);

  return (
    <div className='py-20 max-h-screen'>

    {values.success ?(<>
         <div className=' bg-slate-700 '>
            order ...





         </div>
    
    
    
    
    
    </>)
    :(<><h1>failure</h1></>)}
    
    
    </div>
  )
}

export default Checkoutcorrect