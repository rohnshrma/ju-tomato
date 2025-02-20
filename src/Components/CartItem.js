import React from "react";
import { FaTrash } from "react-icons/fa";

const CartItem = ({ item, onRemove, onUpdate }) => {
  return (
    <div className="row align-items-center border-bottom py-3">
      {/* Image */}
      <div className="col-3 col-md-2">
        <img
          src={item.imageUrl}
          alt={item.name}
          className="img-fluid rounded"
        />
      </div>

      {/* Name and Price */}
      <div className="col-5 col-md-4">
        <h6 className="mb-1">{item.name}</h6>
        <p className="text-muted mb-0">₹{item.price.toFixed(2)}</p>
      </div>

      {/* Quantity Controls */}
      <div className="col-4 col-md-3 d-flex align-items-center">
        <button
          className="btn btn-outline-secondary btn-sm"
          onClick={() => onUpdate(item.id, -1)}
          disabled={item.quantity <= 1}
        >
          -
        </button>
        <input
          type="text"
          value={item.quantity}
          readOnly
          className="form-control text-center mx-2"
          style={{ width: "50px" }}
        />
        <button
          className="btn btn-outline-secondary btn-sm"
          onClick={() => onUpdate(item.id, 1)}
        >
          +
        </button>
      </div>

      {/* Total Price */}
      <div className="col-md-2 d-none d-md-block text-end">
        <strong>₹{(item.price * item.quantity).toFixed(2)}</strong>
      </div>

      {/* Remove Button */}
      <div className="col-2 col-md-1 text-end">
        <button
          className="btn btn-danger btn-sm"
          onClick={() => onRemove(item.id)}
        >
          <FaTrash />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
