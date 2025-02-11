// Importing necessary styles
import "./App.css"; // Importing global styles for the application
import "bootstrap/dist/css/bootstrap.min.css"; // Importing Bootstrap styles for UI components

// Importing necessary dependencies from React Router for navigation
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Importing application components
import Navbar from "./Components/Navbar"; // Navigation bar component
import Menu from "./Components/Menu"; // Menu component that displays available items
import Cart from "./Components/Cart"; // Cart component to show added items

// Importing data (assuming it's a list of menu items)
import data from "./data.js";

// Importing useReducer hook for state management
import { useReducer } from "react";

// Initial State of the cart
const initialState = {
  cartItems: [], // An empty array to store cart items
  total: 0, // Initial total price is set to 0
};

// Reducer function to handle state changes
const reducerFunction = (state, action) => {
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

  // If action type is unknown, return the current state
  return state;
};

function App() {
  // Using useReducer hook for state management
  const [cartState, dispatch] = useReducer(reducerFunction, initialState);

  // Function to add an item to the cart
  const addItemToCart = (newItem) => {
    dispatch({ type: "ADD", payload: newItem }); // Dispatching action to reducer
  };

  return (
    <Router>
      {/* Wrapping the application with Router for navigation */}
      <Navbar /> {/* Navbar component, always visible */}
      <Routes>
        {/* Routes container to define different pages */}
        {/* Home route - Displays the menu and allows adding items to cart */}
        <Route
          path="/"
          element={<Menu menuItems={data} onAdd={addItemToCart} />}
        />
        {/* Cart route - Displays the cart contents */}
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App; // Exporting the App component as default
