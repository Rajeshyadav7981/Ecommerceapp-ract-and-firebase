import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items:[],
    filterdata:[],

}

const Roductsslice = createSlice({
  name:'roduct',
  initialState,
  reducers: {

    set_product:(state,action)=>{
        state.items=action.payload
        
    },
    filter_item:(state,action)=>{
      const {itemss,search}=action.payload
      const ffilterdataa=itemss.filter((item)=>item.name.toLowerCase().includes(search.toLowerCase())|| item.category.toLowerCase().includes(search.toLowerCase()))
      state.filterdata=ffilterdataa
      console.log(ffilterdataa)
    },
    filter_itemm:(state,action)=>{
      state.filterdata=action.payload
    
    
    
    },


  },
});

export const {set_product,filter_item,filter_itemm} = Roductsslice.actions;
export const selectitems=(state)=>state.roduct.items;
export const selectfilterdata=(state)=>state.roduct.filterdata

export default Roductsslice.reducer