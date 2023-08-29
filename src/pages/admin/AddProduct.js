import { useState } from "react"
import {db, storage} from './../../firebase/config'
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { toast } from "react-toastify";
import { Timestamp, addDoc, collection, doc, setDoc } from "firebase/firestore";
import { useParams } from "react-router-dom";
import {set_product} from '../../components/redux/Roductsslice'
import { selectitems } from "../../components/redux/Roductsslice";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from 'axios'
function AddProduct() {
  const element=useSelector(selectitems)
  const history=useNavigate()
  const {id}=useParams()
  const ele=element.find((item)=>(item.id===id))
  function check(id,f1,f2){
    if (id==='Add'){
      return f1
    }
    return f2
  }

  const initial={
    name:'',
    price:'',
    imageurl:'',
    category:'',
    brand:'',
    desc:'',

  }
  const [useritem,setuseritem]=useState(()=>{
    const stat=check(id,{...initial},ele)
    return stat
  })
 const handleinput=(e)=>{

  const{name,value}=e.target;
  setuseritem({...useritem,[name]:value})
 
  
 }
 const handleBrandChange = (e) => {
  const selectedBrand = e.target.value;
  setuseritem({
    ...useritem,
    category: selectedBrand
  });
};
 const handleimage=(e)=>{
  const file=e.target.files[0]
  
  const storageRef = ref(storage,`images/${useritem.name}.jpg`);

const uploadTask = uploadBytesResumable(storageRef, file);


uploadTask.on('state_changed', 
  (snapshot) => {
    //const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
  }, 
  (error) => {
    toast.error(error.message)
  }, 
  () => {
    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
      setuseritem({...useritem,imageurl:downloadURL})
      toast.success('image upload successfully..')
    });
  }
);

 }
 
 const handlesubmitt=(e)=>{





  e.preventDefault()
  try{
    setDoc(doc(db, "products",id), {
      name:useritem.name,
        imageurl:useritem.imageurl,
        price:Number(useritem.price),
        category:useritem.category,
        brand:useritem.brand,
        desc:useritem.desc,
        createdat:ele.createdat,
        editedat:Timestamp.now().toDate(),
    });
    toast.success('product edited successfully...')
    history('/admin/view')
    

  }catch(err){
    toast.error(err.message)
  }

 };
  const  handlesubmit=(e)=>{
    e.preventDefault()

    try{
      const da= {
        name: "name",
        description:"quantity"
      }
      
      addDoc(collection(db, "products"), {
        name:useritem.name,
        imageurl:useritem.imageurl,
        price:Number(useritem.price),
        category:useritem.category,
        brand:useritem.brand,
        desc:useritem.desc,
        createdat:Timestamp.now().toDate(),
      
      });
      console.log('llllllllllllll')
     toast.success('product uploaded successfully..')
     setuseritem({...initial})
    }
    catch(err){

      toast.error(err.message)
    }
  }

  return (
    <div className='bg-white p-8 shadow-md rounded-lg'>
  <h1 className='text-2xl font-semibold mb-4'>{check(id,'Add a Product','Edit the Product')}</h1>
  <form className='flex flex-col gap-4' onSubmit={check(id, handlesubmit, handlesubmitt)}>
    <input
      type='text'
      onChange={handleinput}
      name='name'
      value={useritem.name}
      placeholder='Enter name of the item'
      className='border rounded p-2'
    />
    <input
      type='number'
      onChange={handleinput}
      name='price'
      value={useritem.price}
      placeholder='Enter price of the item'
      className='border rounded p-2'
    />
    <input
      type='file'
      onChange={handleimage}
      name='imageurl'
      placeholder='Upload image'
      className='border rounded p-2'
    />
    <select  onChange={handleBrandChange}>
        <option value=''>Select-category</option>
        <option value="mens">mens</option>
        <option value="mobile">womens</option>
        <option value="laptop">Electronics</option>
        <option value="children">children</option>
    </select>
    <input
      type='text'
      onChange={handleinput}
      name='brand'
      value={useritem.brand}
      placeholder='Enter brand'
      className='border rounded p-2'
    />
    <input
      type='text'
      onChange={handleinput}
      name='desc'
      value={useritem.desc}
      placeholder='Description'
      maxLength={100}
      className='border rounded p-2'
    />
    {useritem.category}
    <button
      type='submit'
      className='bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600'
    >
      {check(id, 'Add Product', 'Edit Product')}
    </button>
  </form>
</div>

  )
}

export default AddProduct