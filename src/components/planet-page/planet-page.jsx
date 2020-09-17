import React, { Component } from 'react';
import ItemList from '../item-list';
import ItemDetails from '../item-details';
import Row from '../row';
import { Type } from '../../utils';

export default class PeoplePage extends Component {
  constructor() {
    super();
    this.state = {
      selectedPlanet: null,
    };

    this.handleListItemClick = this.handleListItemClick.bind(this);
  }

  handleListItemClick(item) {
    this.setState({ selectedPlanet: item });
  }

  render() {
    const { selectedPlanet } = this.state;
    const { getData } = this.props;
    const planetList = (
      <ItemList
        onListItemClick={this.handleListItemClick}
        getData={getData}
        renderItem={({ name, diameter }) => (`${name} (${diameter})`)} />
    );
    const planetDetails = <ItemDetails item={selectedPlanet} type={Type.PLANET} />;
    return (
      <Row left={planetList} right={planetDetails} />
    );
  }
}
