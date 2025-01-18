// import { configureStore } from '@reduxjs/toolkit';
// import CartReducer from './Slices.tsx/CartSlice';

// const store = configureStore({
//     reducer: {
//         Cart: CartReducer,
//     },
// });

// export default store;
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './Slices.tsx/Slicess1'; 

const store = configureStore({
  reducer: {
    user: userReducer, // Add userReducer here
  },
});

export default store;