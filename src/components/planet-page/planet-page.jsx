import React, { Component } from 'react';
import ItemList from '../item-list';
import ItemDetails from '../item-details';
import Row from '../row';
import { Type } from '../../utils';
import API from '../../api/api';

export default class PlanetPage extends Component {
  constructor() {
    super();
    this.api = new API();
    this.state = {
      selectedPlanet: null,
    };

    this.handleListItemClick = this.handleListItemClick.bind(this);
  }

  handleListItemClick(item) {
    this.setState({ selectedPlanet: item });
  }

  render() {
    const { getAllPlanets } = this.api;
    const { selectedPlanet } = this.state;
    const PlanetList = (
      <ItemList
        onListItemClick={this.handleListItemClick}
        getData={getAllPlanets}>
        {({ name, diameter }) => (`${name} (${diameter})`)}
      </ItemList>
    );
    const planetDetails = <ItemDetails item={selectedPlanet} type={Type.PLANET} />;
    return (
      <Row left={PlanetList} right={planetDetails} />
    );
  }
}
