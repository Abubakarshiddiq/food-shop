import React from 'react';
import Logo from '../../Common/Logo/Logo';
import './Banner.css';
import headerImg from './banner.png';

const Banner = () => (
  <header>
    <div className="header-content">
      <Logo />
      <div className="content-main">
        <h1>Delicious food for your cravings</h1>
        <p>We made fresh and healthy meals with different recipes</p>
        <button>
          View Menu <i className="fas fa-long-arrow-alt-right"></i>
        </button>
      </div>
    </div>
    <img className="header-img" src={headerImg} alt="banner" />
  </header>
);

export default Banner;
