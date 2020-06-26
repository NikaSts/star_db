import React, { Component } from 'react';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import ErrorMessage from '../error-message';
import Row from '../row';

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

    const { getData } = this.props;
    const itemList = (
      <ItemList
        onListItemClick={this.handleListItemClick}
        getData={getData}
        renderItem={({ name, gender }) => (`${name} (${gender})`)} />
    );
    const personDetails = <PersonDetails person={selectedPerson} />;
    return (
      <Row left={itemList} right={personDetails} />
    );
  }
}
