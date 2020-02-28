import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from  'react-redux';

import './index.scss';

import CreateButton from './components/CreateButton';
import Board from './components/Board';

import { getBoardsAsync } from '../../store/actions/boards';


const MainPage = () => {
  const allBoards = useSelector(state => state.boards.allBoards);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBoardsAsync());
  }, []);

  return (
    <div className='main-page'>
      <div className='main-page__content'>
        <CreateButton boards={allBoards}/>

        {
          allBoards &&
          !!allBoards.length &&
          allBoards.map(elem =>
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
