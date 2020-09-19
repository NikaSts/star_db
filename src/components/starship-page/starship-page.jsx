import React, { Component } from 'react';
import ItemList from '../item-list';
import ItemDetails from '../item-details';
import Row from '../row';
import { Type } from '../../utils';
import API from '../../api/api';

export default class StarshipPage extends Component {
  constructor() {
    super();
    this.api = new API();
    this.state = {
      selectedStarship: null,
    };

    this.handleListItemClick = this.handleListItemClick.bind(this);
  }

  handleListItemClick(item) {
    this.setState({ selectedStarship: item });
  }

  render() {
    const { selectedStarship } = this.state;
    const starshipList = (
      <ItemList
        onListItemClick={this.handleListItemClick}
        getData={this.api.getAllStarships}>
        {({ name, passengers }) => (`${name} (${passengers})`)}
      </ItemList>
    );
    const starshipDetails = <ItemDetails item={selectedStarship} type={Type.STARSHIP} />;
    return (
      <Row left={starshipList} right={starshipDetails} />
    );
  }
}
