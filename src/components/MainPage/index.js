import React, { useState, useEffect } from 'react';

import './index.scss';

import logo from './icons/logo.svg';
import CreateButton from './components/CreateButton';
import Board from './components/Board';


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

      <div className='main-page__content'>
        <CreateButton />
        <Board title='Example'/>
        <Board title='Example1'/>
        <Board title='Example2'/>
      </div>
    </div>
  );
};

export default MainPage;
