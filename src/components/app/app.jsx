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
const WrappedPeoplePage = withActiveItem(PeoplePage);
const WrappedPlanetPage = withActiveItem(PlanetPage);
const WrappedStarshipPage = withActiveItem(StarshipPage);

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
        render={() => <WrappedPeoplePage />}
            />
      <Route
        exact
        path="/planets"
        render={() => <WrappedPlanetPage />}
            />
      <Route
        exact
        path="/starships"
        render={() => <WrappedStarshipPage />}
            />
    </BrowserRouter>
  </ErrorBoundry>
);

export default App;
