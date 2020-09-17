import React, { Component } from 'react';
import ItemList from '../item-list';
import ItemDetails from '../item-details';
import Row from '../row';
import { Type } from '../../utils';

export default class StarshipPage extends Component {
  constructor() {
    super();
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
    const { getData } = this.props;
    const starshipList = (
      <ItemList
        onListItemClick={this.handleListItemClick}
        getData={getData}
        renderItem={({ name, passengers }) => (`${name} (${passengers})`)} />
    );
    const starshipDetails = <ItemDetails item={selectedStarship} type={Type.STARSHIP} />;
    return (
      <Row left={starshipList} right={starshipDetails} />
    );
  }
}
