import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/circle-buttons.css';

const CircleButtons = () => {
  return (
    <div className="circle-buttons">
      <NavLink exact to="/">
        <span className="circle-button" />
      </NavLink>
      <NavLink to="/show-and-send-data">
        <span className="circle-button" />
      </NavLink>
    </div>
  );
};

export default CircleButtons;
