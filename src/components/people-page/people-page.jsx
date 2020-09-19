import React, { Component } from 'react';
import ItemList from '../item-list';
import ItemDetails from '../item-details';
import Row from '../row';
import { Type } from '../../utils';
import API from '../../api/api';

export default class PeoplePage extends Component {
  constructor() {
    super();
    this.api = new API();
    this.state = {
      selectedPerson: null,
    };

    this.handleListItemClick = this.handleListItemClick.bind(this);
  }

  handleListItemClick(item) {
    this.setState({ selectedPerson: item });
  }

  render() {
    const { selectedPerson } = this.state;
    const peopleList = (
      <ItemList
        onListItemClick={this.handleListItemClick}
        getData={this.api.getAllPeople}>
        {({ name, gender }) => (`${name} (${gender})`)}
      </ItemList>
    );
    const personDetails = <ItemDetails item={selectedPerson} type={Type.PERSON} />;
    return (
      <Row left={peopleList} right={personDetails} />
    );
  }
}
