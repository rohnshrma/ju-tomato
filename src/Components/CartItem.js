import React from "react";
import { FaTrash } from "react-icons/fa";

const CartItem = ({ item, onRemove, onUpdate }) => {
  return (
    <>
      <div className="cart_item row">
        <div className="col-2 cart_item_image">
          <img src={item.imageUrl} alt={item.name} />
        </div>
        <div className="col cart_item_info">
          <p className="cart_item_name">{item.name}</p>
          <p className="cart_item_price">{item.price}</p>
        </div>
        <div className="col cart_item_options">
          <div className="cart_item_options_update">
            <button
              className="btn btn-info btn-sm"
              onClick={() => {
                onUpdate(item.id, -1);
              }}
            >
              -
            </button>
            {item.quantity}
            <button
              className="btn btn-info btn-sm"
              onClick={() => {
                onUpdate(item.id, 1);
              }}
            >
              +
            </button>
          </div>
          <button
            className="btn btn-danger btn-sm"
            onClick={() => {
              onRemove(item.id);
            }}
          >
            <FaTrash />
          </button>
        </div>
      </div>
    </>
  );
};

export default CartItem;
