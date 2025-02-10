import React from "react";

const MenuItem = ({ itemObj }) => {
  const { name, description, price, imageUrl } = itemObj;
  return (
    <div className="col-lg-3 menu-item">
      <div class="card">
        <img src={imageUrl} class="card-img-top" alt={name} />
        <div class="card-body">
          <div className="row dish_info">
            <div className="col-8">
              <h5 class="card-title">{name}</h5>
            </div>
            <div className="col-4">
              <h5 class="card-title">{price}</h5>
            </div>
          </div>

          <p class="card-text">{description}</p>
          <button class="btn btn-danger btn-block">Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
