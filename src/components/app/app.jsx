import React from 'react';
import AppHeader from '../app-header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';

import './app.css';

const App = () => (
  <>
    <AppHeader />
    <RandomPlanet />
    <ItemList />
  </>
);

export default App;
