import React from 'react';
import ItemList from '../item-list';
import ItemDetails from '../item-details';
import Row from '../row';
import { Type } from '../../utils';
import API from '../../api/api';
import withData from '../../hocs/with-data';

const PeoplePage = ({ activeItem, onItemClick }) => {
  const api = new API();

  const { getAllPeople } = api;

  const PeopleList = withData(ItemList, getAllPeople);

  return (
    <Row
      left={(
        <PeopleList
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
};

export default PeoplePage;
