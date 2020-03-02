import React, { useEffect } from 'react';
import { useSelector, useDispatch } from  'react-redux';

import './index.scss';

import AddButton from './components/AddButton';
import List from './components/List';

import allTasks from '../../database/tasks.json';
import { getBoardByIdAsync } from '../../store/actions/boards';
import { getListsByBoardAsync } from '../../store/actions/lists';
import { getTasksSuccess } from '../../store/actions/tasks';


const CurrentBoard = props => {
  const { boardId } = props.match.params;
  const boardById = useSelector(state => state.boards.boardById);
  const listsByBoard = useSelector(state => state.lists.listsByBoard);
  const tasks = useSelector(state => state.tasks.allTasks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getListsByBoardAsync(boardId));
    dispatch(getTasksSuccess(allTasks));
    dispatch(getBoardByIdAsync(boardId));
  }, [boardId]);

  return (
    <div className='current-board'>
      <div className='current-board__title'>
        <div>
          {
            boardById && boardById.title
          }
        </div>
      </div>

      <div className='current-board__lists'>
        <AddButton boardId={boardId}/>

        {
          listsByBoard &&
          !!listsByBoard.length &&
          listsByBoard.map(elem =>
            <List key={elem.id} data={elem} boardId={boardId} tasks={tasks}/>
          )
        }
      </div>  
    </div>
  );
};

export default CurrentBoard;
