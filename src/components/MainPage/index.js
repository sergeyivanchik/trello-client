import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from  'react-redux';

import './index.scss';

import CreateButton from './components/CreateButton';
import Board from './components/Board';
import Spinner from '../Spinner';

import { getBoardsByUserAsync } from '../../store/actions/boards';


const MainPage = () => {
  const [userBoards, setUserBoards] = useState([]);
  const [createClick, setCreateClick] = useState(false);

  const userId = localStorage.getItem('user_id');
  const username = localStorage.getItem('username');

  const isLoadingData = useSelector(state => state.spinner.isLoading);
  const boards = useSelector(state => state.boards.userBoards);
  const dispatch = useDispatch();

  useEffect(() => {
    userId && dispatch(getBoardsByUserAsync(userId));
    setUserBoards(userId ? boards : []);
    setCreateClick(false);
  }, [userId, boards && boards.length, createClick]);

  return (
    <div className='main-page'>
      {
        isLoadingData
          ? <Spinner/>
          : <>
              <div className='main-page__title'>
                {
                  userId
                    ? `${username.toUpperCase()} boards`
                    : 'Custom boards'
                }
              </div>
              <div className='main-page__content'>
                {
                  userBoards &&
                  !!userBoards.length &&
                  userBoards.map(elem =>
                    <Link to={`/board/${elem.id}`} key={elem.id}>
                      <Board title={elem.title} key={elem.id}/>
                    </Link>
                  )
                }
        
                <CreateButton boards={userBoards} setCreateClick={setCreateClick}/>
              </div>
            </>
      }

    </div>
  );
};

export default MainPage;
