import React, { Component } from 'react';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import ErrorBoundry from '../error-boundry';
import Row from '../row';

export default class PeoplePage extends Component {
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
    const { getData } = this.props;
    const itemList = (
      <ItemList
        onListItemClick={this.handleListItemClick}
        getData={getData}>
        {({ name, gender }) => (`${name} (${gender})`)}
      </ItemList>
    );
    const personDetails = <PersonDetails person={selectedPerson} />;

    return (
      <ErrorBoundry>
        <Row left={itemList} right={personDetails} />
      </ErrorBoundry>
    );
  }
}
