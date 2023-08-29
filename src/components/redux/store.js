
import { configureStore } from '@reduxjs/toolkit';
import authSicereducer from './Authslice'
import roductSlicereducer from './Roductsslice'
import cartReducer from './cartSlice'
import shipbillReducer from './shipbill'


  const store =configureStore({
    reducer:{
      auth:authSicereducer,
      roduct:roductSlicereducer,
      cart:cartReducer,
      shipbill:shipbillReducer,
    },
  })

export default store