import React, { Component } from 'react';
import AppHeader from '../app-header';
import RandomPlanet from '../random-planet';
import ErrorMessage from '../error-message';
import './app.css';
import PeoplePage from '../people-page';
import API from '../../api/api';


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      hasError: false,
    };
    this.api = new API();
  }

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    const { hasError } = this.state;

    if (hasError) {
      return <ErrorMessage />;
    }
    return (
      <>
        <AppHeader />
        <RandomPlanet />
        <PeoplePage getData={this.api.getAllPeople} />
      </>
    );
  }
}
