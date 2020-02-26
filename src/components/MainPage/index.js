import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './index.scss';

import logo from './icons/logo.svg';
import CreateButton from './components/CreateButton';
import Board from './components/Board';

import boards from './boards.json';


const MainPage = () => {
  const [mouseOverOnLogo, setMouseOverOnLogo] = useState(false);
  const [boardsList, setBoardsList] = useState(boards);

  return (
    <div className='main-page'>
      <div className='main-page__header'>
        <Link to={'/'}>
          <img
            src={logo}
            alt='logo'
            className={`main-page__logo ${mouseOverOnLogo ? 'main-page__logo_hover' : ''}`}
            onMouseOver={() => setMouseOverOnLogo(true)}
            onMouseLeave={()=> setMouseOverOnLogo(false)}
          />
        </Link>  
      </div>

      <div className='main-page__content'>
        <CreateButton setBoardsList={setBoardsList} boards={boardsList}/>

        {
          boardsList &&
          boardsList.length &&
          boardsList.map(elem =>
            <Board title={elem.title} key={elem.id}/>
          )
        }
      </div>
    </div>
  );
};

export default MainPage;
