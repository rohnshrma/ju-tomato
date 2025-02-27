import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { cartContext } from "../context/cartContext";
const MenuItem = ({ itemObj }) => {
  const { name, description, price, imageUrl } = itemObj;

  const navigate = useNavigate();

  const { dispatch } = useContext(cartContext);

  return (
    <div className="col-lg-3 menu-item">
      <div className="card">
        <img src={imageUrl} className="card-img-top" alt={name} />
        <div className="card-body">
          <div className="row dish_info">
            <div className="col-8">
              <h5 className="card-title">{name}</h5>
            </div>
            <div className="col-4">
              <h5 className="card-title text-end ">₹{price}</h5>
            </div>
          </div>

          <p className="card-text">{description}</p>
          <button
            className="btn btn-danger btn-block"
            onClick={() => {
              dispatch({ type: "ADD", payload: itemObj });
              navigate("/cart");
            }}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
