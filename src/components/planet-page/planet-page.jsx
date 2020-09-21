import React from 'react';
import ItemList from '../item-list';
import ItemDetails from '../item-details';
import Row from '../row';
import { Type } from '../../utils';
import API from '../../api/api';
import withData from '../../hocs/with-data';

const PlanetPage = ({ activeItem, onItemClick }) => {
  const api = new API();

  const { getAllPlanets } = api;

  const PlanetList = withData(ItemList, getAllPlanets);

  return (
    <Row
      left={(
        <PlanetList
          onItemClick={onItemClick}
          activeItem={activeItem}
          renderItem={({ name, diameter }) => (`${name} (${diameter})`)} />
)}
      right={(
        <ItemDetails
          item={activeItem}
          type={Type.PLANET} />
)} />
  );
};

export default PlanetPage;
