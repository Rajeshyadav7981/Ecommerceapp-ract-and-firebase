import React, { useEffect, useState } from 'react';
import { CART_TOTAL_AMOUNT, CART_TOTAL_PRODUCTS, selectcartquantity,selecttotalproducts } from '../../components/redux/cartSlice';
import { useDispatch, useSelector } from 'react-redux'
import { CREATE_SHIP_BILL, selectbill, selectship } from '../../components/redux/shipbill';
import { useNavigate } from 'react-router-dom';

const Checkoutsb = () => {
    const dispatch=useDispatch()
    const history=useNavigate()
    useEffect(()=>{
        dispatch(CART_TOTAL_PRODUCTS())
        
    },[dispatch])
    const qa = useSelector(selectcartquantity);
    const qaa = useSelector(selecttotalproducts);

    const billingaddress={
        fullname:'',
        address1:'',
        address2:'',
        city:'',
        state:'',
        postalcode:''
    }
    const shippingaddress={
        fullname:'',
        address1:'',
        address2:'',
        city:'',
        state:'',
        postalcode:''
    }
    
    const [ship,setship]=useState({...shippingaddress})
    const [bill,setbill]=useState({...billingaddress})
    const handleship=(e)=>{

        const {name,value}=e.target;
        setship({...ship,[name]:value})
       
        
       }
    const handlebill=(e)=>{

        const{name,value}=e.target;
        setbill({...bill,[name]:value})
        
       }
    const printtt=()=>{
        dispatch(CREATE_SHIP_BILL({ship:ship,bill:bill}))
        history('/checkout')
        
       }
  return (
    <>
    <form>
    <div className="flex py-20   gap-30">
      <div className="w-1/3 pr-2">
      <div className="max-w-md mx-auto p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-semibold mb-4 hover:text-blue-500">Shipping Address</h2>
        <div className="mb-4">
          <label htmlFor="fullName" className="block font-medium">Full Name</label>
          <input type="text" name='fullname'  value={shippingaddress.name} onChange={handleship} className="mt-1 p-2 w-full border rounded" />
        </div>
        <div className="mb-4">
          <label htmlFor="fullName" className="block font-medium">Address</label>
          <input type="text" name='address1' onChange={handleship}  className="mt-1 p-2 w-full border rounded" />
        </div>
        <div className="mb-4">
          <label htmlFor="addressLine2" className="block font-medium">Address Line 2</label>
          <input type="text" name='address2' onChange={handleship} className="mt-1 p-2 w-full border rounded" />
        </div>
        <div className="mb-4">
          <label htmlFor="city" className="block font-medium">City</label>
          <input type="text" name='city' onChange={handleship} className="mt-1 p-2 w-full border rounded" />
        </div>
        <div className="mb-4">
          <label htmlFor="state" className="block font-medium">State</label>
          <input type="text" name='state'  onChange={handleship} className="mt-1 p-2 w-full border rounded" />
        </div>
        <div className="mb-4">
          <label htmlFor="postalCode" className="block font-medium">Postal Code</label>
          <input type="text" name='postalcode'  onChange={handleship} className="mt-1 p-2 w-full border rounded" />
        </div>
    </div>
      </div>
      <div className="w-1/4 pr-2">
      <div className="max-w-md mx-auto p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-semibold mb-4 hover:text-blue-500">Billing Addres</h2>
        <div className="mb-4">
          <label htmlFor="fullName" className="block font-medium">Full Name</label>
          <input type="text" name='fullname'  onChange={handlebill} className="mt-1 p-2 w-full border rounded" />
        </div>
        <div className="mb-4">
          <label htmlFor="addressLine1" className="block font-medium">Address Line 1</label>
          <input type="text" name='address1'  onChange={handlebill} className="mt-1 p-2 w-full border rounded" />
        </div>
        <div className="mb-4">
          <label htmlFor="addressLine2" className="block font-medium">Address Line 2</label>
          <input type="text" name='address2'  onChange={handlebill} className="mt-1 p-2 w-full border rounded" />
        </div>
        <div className="mb-4">
          <label htmlFor="city" className="block font-medium">City</label>
          <input type="text" name='city'  onChange={handlebill} className="mt-1 p-2 w-full border rounded" />
        </div>
        <div className="mb-4">
          <label htmlFor="state" className="block font-medium">State</label>
          <input type="text" name='state'  onChange={handlebill} className="mt-1 p-2 w-full border rounded" />
        </div>
        <div className="mb-4">
          <label htmlFor="postalCode" className="block font-medium">Postal Code</label>
          <input type="text" name='postalcode' required  onChange={handlebill} className="mt-1 p-2 w-full border rounded" />
        </div>
    </div>
      </div>
      <div className="w-1/4 pl-2">
      <div className="max-w-md mx-auto p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-semibold mb-4 hover:text-blue-500">Checkout Summary</h2>
      <div className="mb-4">
        <p>Total Products: {qaa}</p>
        <p>Total Price: ₹ {qa.toFixed(2)}</p>
        <p></p>
        <hr className="my-2" />
        <p className="font-semibold"></p>
      </div>
      <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600" type="submit" onClick={printtt}>Proceed to Payment</button>
    </div>
      </div>

    </div>
    </form>
    </>
  );
  
};



export default Checkoutsb
