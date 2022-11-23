import React from 'react';
import './Home.css';
import Banner from './../../Components/Home/Banner/Banner';
import Menu from './../../Components/Common/Menu/Menu';
import Footer from './../../Components/Common/Footer/Footer';
import CartCountButton from '../../Components/Common/CartCountButton/CartCountButton';
import { menuItemsData } from '../../Components/Common/Menu/data';

const Home = () => {
  return (
    <div>
      {/* banner */}
      <Banner />
      {/* Menu */}
      <Menu list={menuItemsData} />
      {/* Footer */}
      <Footer />
      {/* Cart Count Button */}
      <CartCountButton />
    </div>
  );
};

export default Home;
