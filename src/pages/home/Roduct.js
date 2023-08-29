import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filter_item, selectfilterdata,set_product,filter_itemm } from '../../components/redux/Roductsslice'
import Roductcard from './Roductcard'

import { Footer } from '../../components'
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import { db } from '../../firebase/config'
import { selectuserid } from '../../components/redux/Authslice'
function Roduct() {
   /* const fetch=useFetchdata('products')
    console.log(fetch)*/
    const dispatch=useDispatch()
    const userid=useSelector(selectuserid)
    const [roducts,setrodcts]=useState([])
    const [roductss,setrodctss]=useState([])
    const [search,setsearch]=useState('')
    const fetch=useSelector(selectfilterdata)
    useEffect(()=>{
      const database = collection(db,'products');
      const q = query(database, orderBy("createdat",'desc'));
       onSnapshot(q, (snapshot) => {
        const data=snapshot.docs.map((doc)=>({
          id:doc.id,
          ...doc.data(),
        }))
        dispatch(set_product(data))
       setrodcts(data)
       dispatch(filter_itemm(data))
    });
  },[dispatch])
  console.log(userid)
  useEffect(()=>{
    dispatch(filter_item({itemss:roducts,search:search}))
  },[search])
  useEffect(()=>{
    setrodctss(fetch)
  },[fetch])

    const handlesearch=(e)=>{
      setsearch(e.target.value)
    }
   
  return (
    <div className='py-20'>
    <div className='flex flex-col items-center gap-4'>
        <h1 className='bg-black text-2xl text-white py-2 w-80 text-center rounded-md hover:bg-white hover:text-black dura' style={{ borderRadius: '30px' }}>
            Shopping Everyday
        </h1>
        <p className='max-w-[700px] text-gray-600 items-center'>
        An e-commerce website is one that allows people to buy and sell physical goods, services, and digital products over the internet rather than at a brick-and-mortar location.
        </p>
        <input
          type='text'
          placeholder='Search Product..'
          onChange={handlesearch}
          className='bg-gray-500 text-black w-60 h-7'
          style={{ borderRadius: '30px', paddingLeft: '15px'}}
        />
        <span className='w-20 h-[3px] bg-black'></span>
       
    </div>
    <div  className='flex '>
    <div className=' w-4/5 mx-auto py-10  grid grid-cols-4 gap-10 border-1[px] border-gray-700'>
    {
      roductss.map((roduct)=>(
        <Roductcard id={roduct.id} roduct={roduct}/>)
      )
    }
    </div>
    </div>
    <Footer/>
    </div>
  )
}

export default Roduct