import React from 'react';
import ItemList from '../item-list';
import ItemDetails from '../item-details';
import Row from '../row';
import { Type } from '../../utils';
import { getAllStarships } from '../../api/api';
import withActiveItem from '../../hocs/with-active-item';
import withData from '../../hocs/with-data';

const StarshipPage = ({ items, activeItem, onItemClick }) => (
  <Row
    left={(
      <ItemList
        items={items}
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

export default withActiveItem(withData(StarshipPage, getAllStarships));
