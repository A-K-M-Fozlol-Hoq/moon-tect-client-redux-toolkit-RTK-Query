import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import cartSlice from '../feature/cart/cartSlice';
import filterSlice from '../feature/filter/filterSlice';
import productsSlice from '../feature/products/productsSlice';

const store = configureStore({
  //   devTools: false,
  reducer: {
    cart: cartSlice,
    filter: filterSlice,
    product: productsSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
