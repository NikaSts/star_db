import React from 'react';
import { imageEndPoint } from '../../utils';
import './item-details.css';

const ItemDetails = (props) => {
  const { item, type } = props;
  if (item === null) {
    return <p>Select item from list</p>;
  }
  return (
    <section className="person-details d-flex">
      <Item item={item} type={type} />
    </section>
  );
};

const Item = ({ item, type }) => {
  const { id, name } = item;

  return (
    <>
      <div>
        <h3>{name}</h3>
        <table>
          <tbody>
            <tr>
              <td className="term">Name</td>
              <td>{name}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <img src={`${imageEndPoint}/${type}/${id}.jpg`} alt={`Planet ${name}`} />
    </>
  );
};

export default ItemDetails;
