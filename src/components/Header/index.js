import React from 'react';
import { Link } from 'react-router-dom';

import './index.scss'


const Header = () => {
  return (
    <div className="header">
      <Link to={'/'}>
        <span className="header__title">Trello</span>
      </Link>

      <div className="header__auth">
        <span className="header__login">Log In</span>

        <div className="header__signup">
          Sign Up
        </div>
      </div>
    </div>
  );
}

export default Header;
