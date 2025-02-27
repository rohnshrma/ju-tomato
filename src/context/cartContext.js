import React, { createContext, useReducer } from "react";

export const cartContext = createContext();

// Initial State of the cart
const initialState = {
  cartItems: [], // An empty array to store cart items
  total: 0, // Initial total price is set to 0
};

// Reducer function to handle state changes
const reducerFunction = (state, action) => {
  console.log(state, action);

  // If the action type is "ADD", add the item to the cart
  if (action.type === "ADD") {
    console.log("Adding item"); // Logging when an item is added

    // Check if the item already exists in the cart
    const existingItemIndex = state.cartItems.findIndex(
      (item) => item.id === action.payload.id
    );

    console.log("ex :", existingItemIndex); // Logging the existing item index
    console.log(state.cartItems); // Logging the current cart items

    let updatedCartItems;

    if (existingItemIndex !== -1) {
      // If item exists, increase its quantity
      updatedCartItems = [...state.cartItems]; // Copy the existing cart items
      updatedCartItems[existingItemIndex].quantity += 1; // Increment quantity
    } else {
      // If item does not exist, add it with a quantity of 1
      updatedCartItems = [
        ...state.cartItems,
        { ...action.payload, quantity: 1 },
      ];
    }

    // Calculate the new total price
    const newTotal = updatedCartItems.reduce((sum, item) => {
      return sum + item.price * item.quantity;
    }, 0);

    // Return the updated state
    return {
      cartItems: updatedCartItems, // Update cart items
      total: newTotal, // Update total price
    };
  }

  if (action.type === "REMOVE") {
    console.log("removing item with id", action.payload);
    const updatedCartItems = state.cartItems.filter((item) => {
      return item.id !== action.payload;
    });
    const newTotal = updatedCartItems.reduce((sum, item) => {
      return sum + item.price * item.quantity;
    }, 0);

    return {
      cartItems: updatedCartItems,
      total: newTotal,
    };
  }

  if (action.type === "UPDATE") {
    const updatedCartItems = state.cartItems
      .map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: item.quantity + action.payload.amount }
          : item
      )
      .filter((item) => item.quantity > 0);

    const newTotal = updatedCartItems.reduce((sum, item) => {
      return sum + item.price * item.quantity;
    }, 0);

    return {
      cartItems: updatedCartItems,
      total: newTotal,
    };
  }

  // If action type is unknown, return the current state
  return state;
};

export const CartContextProvider = ({ children }) => {
  // Using useReducer hook for state management
  const [cartState, dispatch] = useReducer(reducerFunction, initialState);

  return (
    <cartContext.Provider value={{ cartState, dispatch }}>
      {children}
    </cartContext.Provider>
  );
};
