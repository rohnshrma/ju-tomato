import React from "react";
import MenuItem from "./MenuItem";

const Menu = ({ menuItems }) => {
  return (
    <div className="menu">
      <div className="row">
        {menuItems.map((item) => (
          <MenuItem itemObj={item} />
        ))}
      </div>
    </div>
  );
};

export default Menu;
