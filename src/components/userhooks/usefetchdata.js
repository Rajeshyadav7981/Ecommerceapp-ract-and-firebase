import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect,useState } from "react";
import { db } from "../../firebase/config";
import { toast } from "react-toastify";


/*const useFetchdata=()=>{
    const[dataa,setdataa]=useState([])
    const database = collection(db, "products");
    const q = query(database, orderBy("createdat",'desc'));
     onSnapshot(q, (snapshot) => {
      const data=snapshot.docs.map((doc)=>({
        id:doc.id,
        ...doc.data(),
      }))
      setdataa(data)
    });

    return {dataa}
   }
export default useFetchdata*/
const useFetchData=()=>{

  const [dataa,setdataa]=useState([])
  const getdata=()=>{
      const database = collection(db,'products');
      const q = query(database, orderBy("createdat",'desc'));
       onSnapshot(q, (snapshot) => {
        const data=snapshot.docs.map((doc)=>({
          id:doc.id,
          ...doc.data(),
        }))
        setdataa(data)
      });
  }
  useEffect(()=>{
    getdata()
  },[dataa])
  console.log(dataa)
  return {dataa}
}
export default  useFetchData