import React, { useState } from 'react';
import ItemList from '../item-list';
import ItemDetails from '../item-details';
import Row from '../row';
import { Type } from '../../utils';

const PeoplePage = ({ items }) => {

  const [activeItem, setActiveItem] = useState(null);

  const handleItemClick = (item) => {
    if (activeItem !== null && activeItem.id === item.id) {
      return;
    }
    setActiveItem(item);
  };

  return (
    <Row
      left={(
        <ItemList
          items={items}
          onItemClick={(item) => handleItemClick(item)}
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
