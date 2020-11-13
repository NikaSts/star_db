import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { capitalizeFirstLetter, buttons } from '../../utils';
import './app-header.css';

const AppHeader = () => {
  const [activeItem, setActiveItem] = useState(null);

  const handleItemClick = (item) => {
    if (activeItem === item) {
      return;
    }
    setActiveItem(item);
  };

  return (
    <div className="header d-flex">
      <h1>Star Wars</h1>
      <ul className="header-list d-flex">
        {buttons.map((button) => {
          const isActive = activeItem === button;

          return (
            <li key={button}>
              <Link
                to={`/${button}`}
                className={`btn btn-outline-info ${isActive ? 'active' : ''}`}
                onClick={() => handleItemClick(button)}
              >
                {capitalizeFirstLetter(button)}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default AppHeader;
