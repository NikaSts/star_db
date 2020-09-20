import React from 'react';
import { capitalizeFirstLetter, buttons } from '../../utils';
import './app-header.css';

const AppHeader = () => (
  <div className="header d-flex">
    <h1>Star Wars</h1>
    <ul className="header-list d-flex">
      {buttons.map((button) => (
        <li>
          <button
            type="button"
            className="btn btn-outline-info">
            {capitalizeFirstLetter(button)}
          </button>
        </li>
      ))}
    </ul>
  </div>
);

export default AppHeader;
