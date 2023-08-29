import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    shippaddress:{},
    billaddress:{},

}

const shipbill = createSlice({
  name: 'shipbill',
  initialState,
  reducers: {


          CREATE_SHIP_BILL:(state,action)=>{
              const data=action.payload
              state.shippaddress=data.ship
              state.billaddress=data.bill

              console.log(state.shippaddress)

          },


  }
});

export const {CREATE_SHIP_BILL} = shipbill.actions
export const  selectship=(state)=>state.shipbill.shippaddress
export const  selectbill=(state)=>state.shipbill.billaddress

export default shipbill.reducer