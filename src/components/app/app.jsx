import React, { Component } from 'react';
import AppHeader from '../app-header';
import RandomPlanet from '../random-planet';
import './app.css';
import PeoplePage from '../people-page';
import PlanetPage from '../planet-page';
import API from '../../api/api';
import ErrorBoundry from '../error-boundry';
import StarshipPage from '../starship-page/starship-page';


export default class App extends Component {
  constructor() {
    super();
    this.api = new API();
  }

  render() {
    return (
      <ErrorBoundry>
        <AppHeader />
        <RandomPlanet />
        <PeoplePage getData={this.api.getAllPeople} />
        <PlanetPage getData={this.api.getAllPlanets} />
        <StarshipPage getData={this.api.getAllStarships} />
      </ErrorBoundry>
    );
  }
}
