import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from  'react-redux';

import './index.scss';

import AddButton from './components/AddButton';
import List from './components/List';

import { getBoardByIdAsync } from '../../store/actions/boards';
import { getListsByBoardAsync } from '../../store/actions/lists';
import { getTasksAsync } from '../../store/actions/tasks';


const CurrentBoard = props => {
  const [isAddList, setIsAddList] = useState(true);
  const [isChangeTask, setIsChangeTask] = useState(false);

  const { boardId } = props.match.params;
  const boardById = useSelector(state => state.boards.boardById);
  const listsByBoard = useSelector(state => state.lists.listsByBoard);
  const tasks = useSelector(state => state.tasks.allTasks);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isAddList) {
      dispatch(getListsByBoardAsync(boardId));
      dispatch(getTasksAsync());
      dispatch(getBoardByIdAsync(boardId));
    };
    setIsAddList(false);
  }, [boardId, isAddList]);

  useEffect(() => {
    dispatch(getTasksAsync());
  }, [isChangeTask]);

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
        {
          listsByBoard &&
          !!listsByBoard.length &&
          listsByBoard.map(elem =>
            <List
              key={elem.id}
              data={elem}
              tasks={tasks}
              setIsChangeTask={setIsChangeTask}
            />
          )
        }

        <AddButton boardId={boardId} setIsAddList={setIsAddList}/>
      </div>  
    </div>
  );
};

export default CurrentBoard;
