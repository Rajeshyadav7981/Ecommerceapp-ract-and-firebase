import {useSelector } from "react-redux";
import { selectemail, selectisloggedin } from "../redux/Authslice";

const Showonlogin=({children})=>{
    const islogin=useSelector(selectisloggedin)
    if (islogin){
        return children
    }
    return null
}
export const Showonlogout=({children})=>{
    const islogin=useSelector(selectisloggedin)
    if (!islogin){
        return children
    }
    return null
}

export const Showadmin=({children})=>{
    const islogin=useSelector(selectemail)
    if (islogin==='arun@gmail.com'){
        return children
    }
    return null

}

export default Showonlogin;
