import React from 'react';
import ItemList from '../item-list';
import ItemDetails from '../item-details';
import Row from '../row';
import { Type } from '../../utils';
import { getAllPlanets } from '../../api/api';
import withActiveItem from '../../hocs/with-active-item';
import withData from '../../hocs/with-data';

const PlanetPage = ({ items, activeItem, onItemClick }) => (
  <Row
    left={(
      <ItemList
        items={items}
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

export default withActiveItem(withData(PlanetPage, getAllPlanets));
