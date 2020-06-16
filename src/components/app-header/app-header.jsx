import React from 'react';
import './app-header.css';

const AppHeader = () => (
  <div className="header d-flex">
      <h1>Star DB</h1>
      <ul className="header-list d-flex">
        <li>
          <button type="button" className="btn btn-outline-info">People</button>
        </li>
        <li>
          <button type="button" className="btn btn-outline-info">Planets</button>
        </li>
        <li>
          <button type="button" className="btn btn-outline-info">Starships</button>
        </li>
      </ul>
  </div>
);

export default AppHeader;
