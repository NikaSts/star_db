import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import {
  AppHeader, RandomPlanet, PeoplePage, PlanetPage, StarshipPage, ErrorBoundry,
} from '../../components';

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
