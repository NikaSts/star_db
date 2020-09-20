import React from 'react';
import { Link } from 'react-router-dom';
import { capitalizeFirstLetter, buttons } from '../../utils';
import './app-header.css';

const AppHeader = () => (
  <div className="header d-flex">
    <h1>Star Wars</h1>
    <ul className="header-list d-flex">
      {buttons.map((button) => (
        <li>
          <Link
            to={`/${button}`}
            className="btn btn-outline-info">
            {capitalizeFirstLetter(button)}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default AppHeader;
