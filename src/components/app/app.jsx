import React, { Component } from 'react';
import AppHeader from '../app-header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import PersonDetails from '../person-details';

import './app.css';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      selectedPerson: -1,
    };
    this.handleListItemClick = this.handleListItemClick.bind(this);
  }

  handleListItemClick(id) {
    this.setState({ selectedPerson: id });
  }

  render() {
    const { selectedPerson } = this.state;
    return (
      <>
        <AppHeader />
        <RandomPlanet />

        <div className="row mb2">
          <div className="col-md-4">
            <ItemList onListItemClick={this.handleListItemClick} />
          </div>
          <div className="col-md-8">
            <PersonDetails person={selectedPerson} />
          </div>
        </div>
      </>
    );
  }
}
