import React, { Component } from 'react';
import AppHeader from '../app-header';
import RandomPlanet from '../random-planet';
import ErrorMessage from '../error-message';
import './app.css';
import PeoplePage from '../people-page';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      hasError: false,
    };
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
        <PeoplePage />
      </>
    );
  }
}
