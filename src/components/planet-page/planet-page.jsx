import React, { Component } from 'react';
import ItemList from '../item-list';
import ItemDetails from '../item-details';
import Row from '../row';
import { Type } from '../../utils';
import API from '../../api/api';
import withData from '../../hocs/with-data';

export default class PlanetPage extends Component {
  constructor() {
    super();
    this.api = new API();
    this.state = {
      selectedPlanet: null,
    };

    this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleItemClick(item) {
    this.setState({ selectedPlanet: item });
  }

  render() {
    const { selectedPlanet } = this.state;
    const { getAllPlanets } = this.api;

    const PlanetList = withData(ItemList, getAllPlanets);

    const planetDetails = <ItemDetails item={selectedPlanet} type={Type.PLANET} />;
    return (
      <Row
        left={(
          <PlanetList
            onItemClick={this.handleItemClick}
            renderItem={({ name, diameter }) => (`${name} (${diameter})`)} />
      )}
        right={planetDetails} />
    );
  }
}
