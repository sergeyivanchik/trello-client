import React, { useEffect } from 'react';
import { useSelector, useDispatch } from  'react-redux';

import './index.scss';

import AddButton from './components/AddButton';
import List from './components/List';

import allLists from '../../database/lists.json'
import { getListsSuccess } from '../../store/actions/lists';


const CurrentBoard = props => {
  const { boardId } = props.match.params;
  const boardList = useSelector(state => state.boards.allBoards);
  const lists = useSelector(state => state.lists.allLists);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getListsSuccess(allLists))
  }, []);

  const getBoardTitle = () => {
    const index = boardList &&
      boardList.length &&
      boardList.findIndex(elem => elem.id === +boardId);

    return index >= 0 ? boardList[index] && boardList[index].title : null;
  };

  return (
    <div className='current-board'>
      <div className='current-board__title'>
        <div>
          {getBoardTitle()}
        </div>
      </div>

      <div className='current-board__lists'>
        <AddButton lists={lists} boardId={boardId}/>

        {
          lists &&
          !!lists.length &&
          lists.map(elem => elem.boardId === +boardId &&
            <List key={elem.id} data={elem} boardId={boardId}/>
          )
        }
      </div>  
    </div>
  );
};

export default CurrentBoard;
