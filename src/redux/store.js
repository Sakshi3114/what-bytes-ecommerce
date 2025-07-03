import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';

// Load cart from localStorage
const loadCartFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem('cartItems');
    if (serializedState === null) {
      return undefined;
    }
    return {
      cart: {
        items: JSON.parse(serializedState),
      },
    };
  } catch (err) {
    console.error('Error loading cart from localStorage', err);
    return undefined;
  }
};

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  preloadedState: loadCartFromLocalStorage(),
});

// Save cart to localStorage on state change
store.subscribe(() => {
  try {
    const state = store.getState();
    const serializedState = JSON.stringify(state.cart.items);
    localStorage.setItem('cartItems', serializedState);
  } catch (err) {
    console.error('Error saving cart to localStorage', err);
  }
});

export { store };
