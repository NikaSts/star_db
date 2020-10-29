import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import AppHeader from '../app-header';
import RandomPlanet from '../random-planet';
import './app.css';
import PeoplePage from '../people-page';
import PlanetPage from '../planet-page';
import ErrorBoundry from '../error-boundry';
import StarshipPage from '../starship-page';
import withData from '../../hocs/with-data';
import API from '../../api/api';

const api = new API();
const { getAllPeople, getAllPlanets, getAllStarships } = api;
const PeoplePageWithData = withData(PeoplePage, getAllPeople);
const PlanetPageWithData = withData(PlanetPage, getAllPlanets);
const StarshipPageWithData = withData(StarshipPage, getAllStarships);


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
        render={() => <PeoplePageWithData />}
            />
      <Route
        exact
        path="/planets"
        render={() => <PlanetPageWithData />}
            />
      <Route
        exact
        path="/starships"
        render={() => <StarshipPageWithData />}
            />
    </BrowserRouter>
  </ErrorBoundry>
);

export default App;
