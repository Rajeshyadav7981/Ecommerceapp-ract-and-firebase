import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items:localStorage.getItem('itemss')?JSON.parse(localStorage.getItem('itemss')):[],
    quantity:0,
    products:0,

}

const cartSlice = createSlice({
  name:'cart',
  initialState,
  reducers: {
    
           Add_to_cart:(state,action)=>{
            const item=action.payload
            const present=state.items.findIndex((itemm)=>(
                itemm.id===item.id
            ))
            if (present>=0){
                state.items[present].cartquantity+=1

            }
            else{
                const temp={...item,cartquantity:1}
                state.items.push(temp)
            }
            localStorage.setItem('itemss',JSON.stringify(state.items))
            console.log(state.items)
            

           },
           remove_from_cart: (state, action) => {
            const itemToRemove = action.payload;
            console.log(itemToRemove.id)
            const updatedCartItems = state.items.filter(item => item.id !== itemToRemove.id);
            localStorage.setItem('itemss', JSON.stringify(updatedCartItems));
          
          },
          
           CLEAR_CART:(state,action)=>{
            
            state.items=[]
            localStorage.setItem('itemss', JSON.stringify([]));
           },
           CART_TOTAL_AMOUNT: (state, action) => {
            const products = state.items;
            let amount = 0;
          
            products.map((item,id) => {
                console.log(item)
              amount += item.cartquantity * item.price;
            });
            // Update the 'quantity' in the state
            state.quantity = amount;
          },
          CART_TOTAL_PRODUCTS: (state, action) => {
            const productss = state.items;
            let total = 0;
          
            productss.map((item,id) => {
                console.log(item)
              total+= item.cartquantity ;
            });
            // Update the 'quantity' in the state
            state.products = total;
          },


          
  },
});

export const {Add_to_cart,remove_from_cart,CLEAR_CART,CART_TOTAL_AMOUNT,CART_TOTAL_PRODUCTS} = cartSlice.actions
export const  selectcartitems=(state)=>state.cart.items
export const  selectcartquantity=(state)=>state.cart.quantity
export const  selecttotalproducts=(state)=>state.cart.products


export default cartSlice.reducer