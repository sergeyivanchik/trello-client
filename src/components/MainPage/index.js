import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './index.scss';

import CreateButton from './components/CreateButton';
import Board from './components/Board';

import boards from './boards.json';


const MainPage = () => {
  const [boardsList, setBoardsList] = useState(boards);

  return (
    <div className='main-page'>
      <div className='main-page__content'>
        <CreateButton setBoardsList={setBoardsList} boards={boardsList}/>

        {
          boardsList &&
          boardsList.length &&
          boardsList.map(elem =>
            <Link to={`/board/${elem.id}`} key={elem.id}>
              <Board title={elem.title} key={elem.id}/>
            </Link>
          )
        }
      </div>
    </div>
  );
};

export default MainPage;
