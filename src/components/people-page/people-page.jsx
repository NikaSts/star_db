import React from 'react';
import ItemList from '../item-list';
import ItemDetails from '../item-details';
import Row from '../row';
import { Type } from '../../utils';
import withData from '../../hocs/with-data';
import { getAllPeople } from '../../api/api';
import withActiveItem from '../../hocs/with-active-item';

const PeoplePage = ({ items, activeItem, onItemClick }) => (
  <Row
    left={(
      <ItemList
        items={items}
        onItemClick={onItemClick}
        activeItem={activeItem}
        renderItem={({ name, gender }) => (`${name} (${gender})`)} />
)}
    right={(
      <ItemDetails
        item={activeItem}
        type={Type.PERSON} />
)} />
);

export default withActiveItem(withData(PeoplePage, getAllPeople));
