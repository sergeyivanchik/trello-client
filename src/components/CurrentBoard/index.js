import React, { useEffect } from 'react';
import { useSelector, useDispatch } from  'react-redux';

import './index.scss';

import AddButton from './components/AddButton';
import List from './components/List';

import allTasks from '../../database/tasks.json';
import { getListsAsync } from '../../store/actions/lists';
import { getTasksSuccess } from '../../store/actions/tasks';


const CurrentBoard = props => {
  const { boardId } = props.match.params;
  const boardList = useSelector(state => state.boards.allBoards);
  const lists = useSelector(state => state.lists.allLists);
  const tasks = useSelector(state => state.tasks.allTasks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getListsAsync());
    dispatch(getTasksSuccess(allTasks));
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
            <List key={elem.id} data={elem} boardId={boardId} tasks={tasks}/>
          )
        }
      </div>  
    </div>
  );
};

export default CurrentBoard;
