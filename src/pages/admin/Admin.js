import React from 'react'
import { Routes,Route, Link } from 'react-router-dom'
import Navbar from './Navbar'
import Homee from './Homee'
import Viewproducts from './Viewproducts'
import Orders from './Orders'
import Addproduct from './AddProduct'


function Admin() {
  return (
    <div className='py-20 flex '>
      <Navbar/>
        
    <Routes>
         <Route path='/' element={<Homee/>}></Route>
         <Route path='/order' element={<Orders/>}></Route>
         <Route path='/view' element={<Viewproducts/>}></Route>
         <Route path='/add/:id' element={<Addproduct/>}></Route>
         </Routes>
       






    </div>
  )
}

export default Admin