import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import AppHeader from '../app-header';
import RandomPlanet from '../random-planet';
import './app.css';
import PeoplePage from '../people-page';
import PlanetPage from '../planet-page';
import ErrorBoundry from '../error-boundry';
import StarshipPage from '../starship-page';
import withActiveItem from '../../hocs/with-active-item';

const WrappedAppHeader = withActiveItem(AppHeader);

const App = () => (
  <ErrorBoundry>
    <BrowserRouter>
      <Route
        path="/"
        render={() => (
          <>
            <WrappedAppHeader />
            <RandomPlanet />
          </>
        )}
            />
      <Route
        exact
        path="/people"
        component={PeoplePage}
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
