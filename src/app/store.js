import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import cartSlice from '../feature/cart/cartSlice';
import filterSlice from '../feature/filter/filterSlice';
// import productsSlice from '../feature/products/productsSlice';
import { productApi } from '../feature/api/apiSlice';
const store = configureStore({
  //   devTools: false,
  reducer: {
    [productApi.reducerPath]: productApi.reducer,
    cart: cartSlice,
    filter: filterSlice,
    // product: productsSlice,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
});

export default store;
