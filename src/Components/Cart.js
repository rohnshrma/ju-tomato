import React from "react";
import CartItem from "./CartItem";

const Cart = ({ cart, onRemove, onUpdate }) => {
  return (
    <div className="cart">
      {cart.cartItems.map((itemObj) => (
        <CartItem
          item={itemObj}
          onRemove={onRemove}
          key={itemObj.id}
          id={itemObj.id}
          onUpdate={onUpdate}
        />
      ))}
    </div>
  );
};

export default Cart;
