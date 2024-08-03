import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartSlice"; // Import the reducer from CartSlice

// Configure the store
const store = configureStore({
  reducer: {
    cart: cartReducer, // Specify the key 'cart' for the cart reducer
  },
});

// Export the store
export default store;
