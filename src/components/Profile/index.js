import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from  'react-redux';

import './index.scss';
import { Tabs } from 'antd';

import userIcon from './icons/user.svg';

import Boards from './components/Boards';
import Lists from './components/Lists';
import Tasks from './components/Tasks';

import { getBoardsByUserAsync } from '../../store/actions/boards';
import { getListsAsync } from '../../store/actions/lists';
import { getTasksAsync } from '../../store/actions/tasks';


const Profile = () => {
  const [isDeleteTask, setIsDeleteTask] = useState(false);
  const [isDeleteList, setIsDeleteList] = useState(false);
  const [isDeleteBoard, setISDeleteBoard] = useState(false);

  const userBoards = useSelector(state => state.boards.userBoards);
  const lists = useSelector(state => state.lists.allLists);
  const tasks = useSelector(state => state.tasks.allTasks);
  const dispatch = useDispatch();

  const user_id = localStorage.getItem('user_id');
  const username = localStorage.getItem('username');
  const email = localStorage.getItem('email');
  const userLists = lists.filter(elem => userBoards.find(board => board.id === elem.board));
  const userTasks = tasks.filter(elem => userLists.find(list => list.id === elem.list));

  useEffect(() => {
    if (user_id) {
      dispatch(getBoardsByUserAsync(user_id));
      dispatch(getListsAsync());
      dispatch(getTasksAsync());
    };
    setIsDeleteTask(false);
    setIsDeleteList(false);
    setISDeleteBoard(false);
  }, [dispatch, user_id, isDeleteTask, isDeleteList, isDeleteBoard]);

  return (
    <div className='profile'>
      <div className='profile__header'>
        <div className='profile__icon'>
          <img alt='profile' src={userIcon}/>
        </div>

        <span>{username}</span>
        <span>{email}</span>
      </div>
      <div>
        <Tabs type="card">
          <Tabs.TabPane tab="Boards" key="1">
            <Boards
              boards={userBoards}
              lists={userLists}
              tasks={userTasks}
              setISDeleteBoard={setISDeleteBoard}
            />
          </Tabs.TabPane>
          <Tabs.TabPane tab="Lists" key="2">
            <Lists
              lists={userLists}
              tasks={userTasks}
              boards={userBoards}
              setIsDeleteList={setIsDeleteList}
            />
          </Tabs.TabPane>
          <Tabs.TabPane tab="Tasks" key="3">
            <Tasks
              tasks={userTasks}
              lists={userLists}
              boards={userBoards}
              setIsDeleteTask={setIsDeleteTask}
            />
          </Tabs.TabPane>
        </Tabs>
      </div>
    </div>
  );
};

export default Profile;
