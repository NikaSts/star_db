import React from 'react';
import { ItemList, ItemDetails, Row } from '../../components';
import { withData, withActiveItem } from '../../hocs';
import { getAllPlanets } from '../../api/api';
import { Type } from '../../utils';

const PlanetPage = ({ items, activeItem, onItemClick }) => (
  <Row
    left={
      <ItemList
        items={items}
        onItemClick={onItemClick}
        activeItem={activeItem}
        renderItem={({ name, diameter }) => `${name} (${diameter})`}
      />
    }
    right={<ItemDetails item={activeItem} type={Type.PLANET} />}
  />
);

export default withActiveItem(withData(PlanetPage, getAllPlanets));
