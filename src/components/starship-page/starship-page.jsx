import React from 'react';
import { ItemList, ItemDetails, Row } from '../../components';
import { withData, withActiveItem } from '../../hocs';
import { getAllStarships } from '../../api/api';
import { Type } from '../../utils';

const StarshipPage = ({ items, activeItem, onItemClick }) => (
  <Row
    left={
      <ItemList
        items={items}
        onItemClick={onItemClick}
        activeItem={activeItem}
        renderItem={({ name, passengers }) => `${name} (${passengers})`}
      />
    }
    right={<ItemDetails item={activeItem} type={Type.STARSHIP} />}
  />
);

export default withActiveItem(withData(StarshipPage, getAllStarships));
