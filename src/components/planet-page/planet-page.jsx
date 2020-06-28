import React, { Component } from 'react';
import ItemList from '../item-list';
import PlanetDetails from '../planet-details';
import ErrorBoundry from '../error-boundry';
import Row from '../row';

export default class PlanetPage extends Component {
  constructor() {
    super();
    this.state = {
      selectedPlanet: -1,
    };

    this.handleListItemClick = this.handleListItemClick.bind(this);
  }

  handleListItemClick(id) {
    this.setState({ selectedPlanet: id });
  }

  render() {
    const { selectedPlanet } = this.state;
    const { getData } = this.props;
    const itemList = (
      <ItemList
        onListItemClick={this.handleListItemClick}
        getData={getData}>
        {({ name, population }) => (`${name} (${population})`)}
      </ItemList>
    );
    const planetDeails = <PlanetDetails planet={selectedPlanet} />;

    return (
      <ErrorBoundry>
        <Row left={itemList} right={planetDeails} />
      </ErrorBoundry>
    );
  }
}
