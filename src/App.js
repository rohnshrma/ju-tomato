// Importing necessary styles
import "./App.css"; // Importing global styles for the application
import "bootstrap/dist/css/bootstrap.min.css"; // Importing Bootstrap styles for UI components

// Importing necessary dependencies from React Router for navigation
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Importing application components
import Navbar from "./Components/Navbar"; // Navigation bar component
import Menu from "./Components/Menu"; // Menu component that displays available items
import Cart from "./Components/Cart"; // Cart component to show added items
import EnterDetails from "./Components/EnterDetails";
// Importing data (assuming it's a list of menu items)
import data from "./data.js";

// Importing useReducer hook for state management

import { cartContext } from "./context/cartContext.js";
import { useContext } from "react";

function App() {
  const { cartState } = useContext(cartContext);

  return (
    <Router>
      {/* Wrapping the application with Router for navigation */}
      <Navbar /> {/* Navbar component, always visible */}
      <Routes>
        {/* Routes container to define different pages */}
        {/* Home route - Displays the menu and allows adding items to cart */}
        <Route path="/" element={<Menu menuItems={data} />} />
        {/* Cart route - Displays the cart contents */}
        <Route path="/cart" element={<Cart cart={cartState} />} />
        <Route path="/enter_details" element={<EnterDetails />} />
      </Routes>
    </Router>
  );
}

export default App; // Exporting the App component as default
