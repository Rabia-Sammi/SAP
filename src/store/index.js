import {configureStore} from '@reduxjs/toolkit';
import filterSlice from './filterSlice';


const store = configureStore({reducer:{filter: filterSlice.reducer}});
// const store = configureStore({reducer:{cart:cartSlice.reducer, cartControl:cartControllerSlice.reducer}});
export default store;


