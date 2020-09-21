import React from 'react';
import { Link } from 'react-router-dom';
import { capitalizeFirstLetter, buttons } from '../../utils';
import './app-header.css';

const AppHeader = ({ activeItem, onItemClick }) => (
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
              onClick={() => onItemClick(button)}>
              {capitalizeFirstLetter(button)}
            </Link>
          </li>
        );
      })}
    </ul>
  </div>
);

AppHeader.defaultProps = {
  activeItem: buttons[0],
};

export default AppHeader;
