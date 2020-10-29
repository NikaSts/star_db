import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import AppHeader from '../app-header';
import RandomPlanet from '../random-planet';
import './app.css';
import PeoplePage from '../people-page';
import PlanetPage from '../planet-page';
import ErrorBoundry from '../error-boundry';
import StarshipPage from '../starship-page';


const App = () => (
  <ErrorBoundry>
    <BrowserRouter>
      <Route
        path="/"
        render={() => (
          <>
            <AppHeader />
            <RandomPlanet />
          </>
        )}
            />
      <Route
        exact
        path="/people"
        render={() => <PeoplePage />}
            />
      <Route
        exact
        path="/planets"
        render={() => <PlanetPage />}
            />
      <Route
        exact
        path="/starships"
        render={() => <StarshipPage />}
            />
    </BrowserRouter>
  </ErrorBoundry>
);

export default App;
