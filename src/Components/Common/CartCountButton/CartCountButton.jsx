import React from 'react';
import { useHistory } from 'react-router';
import './CartCountButton.css';

const CartCountButton = ({ cartCount }) => {
  const history = useHistory();
  return (
    <div className="btnCartCount" onClick={() => history.push('/cart')}>
      <div className="count">{cartCount >= 100 ? '99' : cartCount}</div>
      <i class="fas fa-shopping-cart"></i>
    </div>
  );
};

export default CartCountButton;
