import React, { Component } from 'react';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
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
    const peopleList = (
      <ItemList
        onListItemClick={this.handleListItemClick}
        getData={getData}
        renderItem={({ name, gender }) => (`${name} (${gender})`)} />
    );
    const personDetails = <PersonDetails person={selectedPerson} />;
    return (
      <Row left={peopleList} right={personDetails} />
    );
  }
}
