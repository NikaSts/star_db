import React, { Component } from 'react';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import ErrorMessage from '../error-message';

export default class PeoplePage extends Component {
  constructor() {
    super();
    this.state = {
      selectedPerson: -1,
      hasError: false,
    };

    this.handleListItemClick = this.handleListItemClick.bind(this);
  }

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  handleListItemClick(id) {
    this.setState({ selectedPerson: id });
  }

  render() {
    const { selectedPerson, hasError } = this.state;

    if (hasError) {
      return <ErrorMessage />;
    }
    return (
      <>
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
