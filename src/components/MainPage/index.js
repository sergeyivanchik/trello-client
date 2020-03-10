import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from  'react-redux';

import './index.scss';

import CreateButton from './components/CreateButton';
import Board from './components/Board';

import { getBoardsByUserAsync } from '../../store/actions/boards';


const MainPage = ({ loginClick }) => {
  const [userBoards, setUserBoards] = useState([]);

  const user = useSelector(state => state.users.currentUser);
  const boards = useSelector(state => state.boards.userBoards);
  const dispatch = useDispatch();

  useEffect(() => {
    user && dispatch(getBoardsByUserAsync(user.id));
    setUserBoards(boards);
  }, [user, loginClick, boards && boards.length]);

  return (
    <div className='main-page'>
        <div className='main-page__title'>
          Custom boards
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

          <CreateButton boards={userBoards}/>
        </div>
      </div>
  );
};

export default MainPage;
