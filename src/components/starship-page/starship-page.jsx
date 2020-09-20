import React, { Component } from 'react';
import ItemList from '../item-list';
import ItemDetails from '../item-details';
import Row from '../row';
import { Type } from '../../utils';
import API from '../../api/api';
import withData from '../../hocs/with-data';

export default class StarshipPage extends Component {
  constructor() {
    super();
    this.api = new API();
    this.state = {
      selectedStarship: null,
    };

    this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleItemClick(item) {
    this.setState({ selectedStarship: item });
  }

  render() {
    const { selectedStarship } = this.state;
    const { getAllStarships } = this.api;

    const StarshipList = withData(ItemList, getAllStarships);
    const starshipDetails = <ItemDetails item={selectedStarship} type={Type.STARSHIP} />;
    return (
      <Row
        left={(
          <StarshipList
            onItemClick={this.handleItemClick}
            renderItem={({ name, passengers }) => (`${name} (${passengers})`)} />
)}
        right={starshipDetails} />
    );
  }
}
