import React from 'react';
import './item-list.css';


const ItemList = (props) => {
  const {
    items, onItemClick, activeItem, renderItem,
  } = props;
  return (
    <ul className="list-group">
      {items.map((item) => {
        const { id } = item;
        const isActive = activeItem ? activeItem.id === id : null;
        const label = renderItem(item);
        return (
          <li
            className="list-group-item"
            key={id}>
            <button
              className={`list-group-item list-group-item-action ${isActive ? 'active' : ''}`}
              type="button"
              onClick={() => onItemClick(item)}
              onKeyPress={() => onItemClick(item)}
              tabIndex="0">
              {label}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ItemList;
