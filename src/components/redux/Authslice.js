import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   isloggedin:false,
   email:null,
   username:null,
   userid:null,

}

const Authslice = createSlice({
  name: 'auth',
  initialState,
  reducers: {

           set:(state,action)=>{
                const{email,username,userid}=action.payload
                state.isloggedin=true
                state.email=email
                state.username=username
                state.userid=userid
              console.log(userid)
           },
           remove:(state,action)=>{
                state.isloggedin=false
                state.email=null
                state.username=null
                state.userid=null
              
            

           },
  },
});

export const {set,remove} = Authslice.actions
export const selectisloggedin=(state)=>state.auth.isloggedin;
export const selectemail=(state)=>state.auth.email;
export const selectuserid=(state)=>state.auth.userid;

export default Authslice.reducer