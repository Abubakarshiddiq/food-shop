import React from 'react';
import './Menu.css';
import MenuItem from './MenuItem/MenuItem';

const Menu = ({list}) => {
  return (
    <main>
      {list.map((item) => (
        <MenuItem item={item} key={item.id} />
      ))}
    </main>
  );
};

export default Menu;
