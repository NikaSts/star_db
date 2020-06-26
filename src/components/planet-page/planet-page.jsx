import React, { Component } from 'react';
import ItemList from '../item-list';
import PlanetDetails from '../planet-details';
import ErrorMessage from '../error-message';
import Row from '../row';

export default class PlanetPage extends Component {
  constructor() {
    super();
    this.state = {
      selectedPlanet: -1,
      hasError: false,
    };

    this.handleListItemClick = this.handleListItemClick.bind(this);
  }

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  handleListItemClick(id) {
    this.setState({ selectedPlanet: id });
  }

  render() {
    const { selectedPlanet, hasError } = this.state;
    if (hasError) {
      return <ErrorMessage />;
    }

    const { getData } = this.props;
    const itemList = (
      <ItemList
        onListItemClick={this.handleListItemClick}
        getData={getData}
        renderItem={({ name, population }) => (`${name} (${population})`)} />
    );
    const planetDeails = <PlanetDetails planet={selectedPlanet} />;
    return (
      <Row left={itemList} right={planetDeails} />
    );
  }
}
