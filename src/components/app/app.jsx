import React, { Component } from 'react';
import AppHeader from '../app-header';
import RandomPlanet from '../random-planet';
import './app.css';
import PeoplePage from '../people-page';
import API from '../../api/api';
import ErrorBoundry from '../error-boundry';


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
      </ErrorBoundry>
    );
  }
}
