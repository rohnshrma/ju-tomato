import React from "react";
import MenuItem from "./MenuItem";

const Menu = ({ menuItems }) => {
  return (
    <div className="menu container ">
      <h1 className="mb-4">Our Delicious Menu</h1>
      <div className="row">
        {menuItems.map((item) => (
          <MenuItem itemObj={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Menu;
