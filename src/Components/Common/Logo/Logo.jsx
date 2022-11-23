import React from 'react';
import './Logo.css';
import logoImg from './logo.png';

const Logo = () => {
    return (
        <div className="logo">
            <div>
                <img src={logoImg} alt="logo" />
                <span>
                    <b>Test</b>
                </span>
            </div>
            <p>
                <b>Restaurant & BBQ</b>
            </p>
        </div>
    );
};

export default Logo;