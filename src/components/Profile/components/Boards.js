import React from 'react';

import './Boards.scss';
import { Table } from 'antd';

import deleteIcon from '../icons/delete.svg';


const Boards = ({ boards, lists, tasks }) => {
  const data = [];
  boards.forEach(elem => {
    data.push({ title: elem.title, boardId: elem.id });
  });

  data.map(elem => {
    const currentLists = lists && lists.length && lists.filter(list => list.board === elem.boardId);

    elem.listsCount = currentLists.length;
    elem.currentLists = currentLists;

    if (currentLists && currentLists.length === 0) {
      elem.tasksCount = 0;
    } else {
      const currentTasks = tasks &&
        tasks.length &&
        tasks.filter(task => currentLists.find(list => list.id === task.list));

        elem.tasksCount = currentTasks.length;
    }
  });

  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title'
    },
    {
      title: 'Lists count',
      dataIndex: 'listsCount',
      key: 'listsCount'
    },
    {
      title: 'Tasks count',
      dataIndex: 'tasksCount',
      key: 'tasksCount'
    },
    {
      dataIndex: 'boardId',
      key: 'boardId',
      render: id => <img className='boards__delete-icon' src={deleteIcon} alt='delete'/>,
    },
  ];

  return (
    <div className='boards'>
      <Table columns={columns} dataSource={data}/>
    </div>
  );
};

export default Boards;
