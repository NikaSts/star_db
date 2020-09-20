import React, { Component } from 'react';
import ItemList from '../item-list';
import ItemDetails from '../item-details';
import Row from '../row';
import { Type } from '../../utils';
import API from '../../api/api';
import withData from '../../hocs/with-data';

export default class PeoplePage extends Component {
  constructor() {
    super();
    this.api = new API();
    this.state = {
      selectedPerson: null,
    };

    this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleItemClick(item) {
    this.setState({ selectedPerson: item });
  }

  render() {
    const { selectedPerson } = this.state;
    const { getAllPeople } = this.api;

    const PeopleList = withData(ItemList, getAllPeople);

    const personDetails = <ItemDetails item={selectedPerson} type={Type.PERSON} />;
    return (
      <Row
        left={(
          <PeopleList
            onItemClick={this.handleItemClick}
            renderItem={({ name, gender }) => (`${name} (${gender})`)} />
)}
        right={personDetails} />
    );
  }
}
