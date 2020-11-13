import React, { useState } from 'react';

const withActiveItem = (Component) => {
  const WrapperWithActiveItem = (props) => {
    const [activeItem, setActiveItem] = useState(null);

    const handleItemClick = (item) => {
      if (activeItem !== null && activeItem.id === item.id) {
        return;
      }
      setActiveItem(item);
    };

    return (
      <Component {...props} activeItem={activeItem} onItemClick={(item) => handleItemClick(item)} />
    );
  };
  return WrapperWithActiveItem;
};

export default withActiveItem;
