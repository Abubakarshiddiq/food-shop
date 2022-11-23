import React from 'react';
import BattonAddRemoveItem from '../../BattonAddRemoveItem/BattonAddRemoveItem';
import './MenuItem.css';

const MenuItem = ({ item }) => {
  const { id, name, info, price, img } = item;
  return (
    <div className="item">
      <img src={img} alt="item" />
      <div className="item-head-desc">
        <p className="head-desc-name">{name}</p>
        <p className="head-desc-info">
          <small>{info}</small>
        </p>
      </div>
      <div className="item-food-desc">
        <span className="item-food-price">${price}</span>
        <BattonAddRemoveItem quantity={10} />
      </div>
    </div>
  );
};

export default MenuItem;
