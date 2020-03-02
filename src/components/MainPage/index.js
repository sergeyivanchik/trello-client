import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from  'react-redux';

import './index.scss';

import CreateButton from './components/CreateButton';
import Board from './components/Board';
import Spinner from '../Spinner';

import { getBoardsAsync } from '../../store/actions/boards';
import { showSpinner, hideSpinner } from '../../store/actions/spinner';


const MainPage = () => {
  const allBoards = useSelector(state => state.boards.allBoards);
  const isLoading = useSelector(state => state.spinner.isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showSpinner());
    dispatch(getBoardsAsync());
    dispatch(hideSpinner());
  }, []);

  return (
    <>
    {
      isLoading
        ? <Spinner/>
        : <div className='main-page'>
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
    }
    </>
  );
};

export default MainPage;
