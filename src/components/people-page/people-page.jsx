import React, { Component } from 'react';
import ItemList from '../item-list';
import ItemDetails from '../item-details';
import Row from '../row';
import { Type } from '../../utils';

export default class PeoplePage extends Component {
  constructor() {
    super();
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

    const { getData } = this.props;
    const peopleList = (
      <ItemList
        onListItemClick={this.handleListItemClick}
        getData={getData}
        renderItem={({ name, gender }) => (`${name} (${gender})`)} />
    );
    const personDetails = <ItemDetails item={selectedPerson} type={Type.PERSON} />;
    return (
      <Row left={peopleList} right={personDetails} />
    );
  }
}
