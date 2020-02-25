import React, { useState, useEffect } from 'react';

import './index.scss';

import logo from './icons/logo.svg';


const MainPage = () => {
  const [mouseOverOnLogo, setMouseOverOnLogo] = useState(false);

  return (
    <div className='main-page'>
      <div className='main-page__header'>
        <img
          src={logo}
          alt='logo'
          className={`main-page__logo ${mouseOverOnLogo ? 'main-page__logo_hover' : ''}`}
          onMouseOver={() => setMouseOverOnLogo(true)}
          onMouseLeave={()=> setMouseOverOnLogo(false)}
        />
      </div>
    </div>
  );
};

export default MainPage;
