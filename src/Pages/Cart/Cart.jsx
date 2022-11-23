import React from 'react';
import Logo from '../../Components/Common/Logo/Logo';
import { menuItemsData } from '../../Components/Common/Menu/data';
import Menu from '../../Components/Common/Menu/Menu';
import './Cart.css';
import Footer from './../../Components/Common/Footer/Footer';
import EmptyCart from './EmptyCart/EmptyCart';

const Cart = () => {
  return (
    <>
      <div className="cart-header">
        <Logo />
      </div>
      <EmptyCart />
      <div className="orders">
        <h1 className="orders-headine">Your Order</h1>
        <div className="order-menu">
          <Menu list={menuItemsData} />
        </div>
        <h3 className="orders-total">Your Total $30</h3>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
