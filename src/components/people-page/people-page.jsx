import React from 'react';
import { ItemList, ItemDetails, Row } from '../../components';
import { withData, withActiveItem } from '../../hocs';
import { getAllPeople } from '../../api/api';
import { Type } from '../../utils';

const PeoplePage = ({ items, activeItem, onItemClick }) => (
  <Row
    left={
      <ItemList
        items={items}
        onItemClick={onItemClick}
        activeItem={activeItem}
        renderItem={({ name, gender }) => `${name} (${gender})`}
      />
    }
    right={<ItemDetails item={activeItem} type={Type.PERSON} />}
  />
);

export default withActiveItem(withData(PeoplePage, getAllPeople));
