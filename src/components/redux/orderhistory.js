import { createSlice } from '@reduxjs/toolkit'

const initialState = {

     orderdetails:{},

}

const orderhistory = createSlice({
  name: 'orders',
  initialState,
  reducers: {



    SAVE_ORDERS:(state,action)=>{
        state.orderdetails=action.payload

    },




  }
});

export const {SAVE_ORDERS} = orderhistory.actions
export const orderdetails=(state)=>state.orders.orderdetails

export default orderhistory.reducer