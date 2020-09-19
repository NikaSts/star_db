import React from 'react';
import AppHeader from '../app-header';
import RandomPlanet from '../random-planet';
import './app.css';
import PeoplePage from '../people-page';
import PlanetPage from '../planet-page';
import ErrorBoundry from '../error-boundry';
import StarshipPage from '../starship-page';


const App = () => (
  <ErrorBoundry>
    <AppHeader />
    <RandomPlanet />
    <PlanetPage />
    <PeoplePage />
    <StarshipPage />
  </ErrorBoundry>
);

export default App;
