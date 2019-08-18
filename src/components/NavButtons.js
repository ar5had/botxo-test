import React from 'react';
import { NavLink } from "react-router-dom";

const NavButtons = () => {
  return (
    <div className="nav-buttons">
      <NavLink exact to="/" className="button">
        Get and edit data <span>→</span>
      </NavLink>
      <NavLink to="/show-and-send-data" className="button">
        Show and send data <span>→</span>
      </NavLink>
    </div>
  );
};

export default NavButtons;


