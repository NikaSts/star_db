import React from 'react';
import ItemList from '../item-list';
import ItemDetails from '../item-details';
import Row from '../row';
import { Type } from '../../utils';
import API from '../../api/api';
import withData from '../../hocs/with-data';

const StarshipPage = ({ activeItem, onItemClick }) => {
  const api = new API();

  const { getAllStarships } = api;

  const StarshipList = withData(ItemList, getAllStarships);

  return (
    <Row
      left={(
        <StarshipList
          onItemClick={onItemClick}
          activeItem={activeItem}
          renderItem={({ name, passengers }) => (`${name} (${passengers})`)} />
)}
      right={(
        <ItemDetails
          item={activeItem}
          type={Type.STARSHIP} />
)} />
  );
};

export default StarshipPage;
