import React from 'react';

import './Tasks.scss';
import { Table } from 'antd';

import deleteIcon from '../icons/delete.svg';


const Tasks = ({ tasks, lists, boards }) => {
  const data = [];
  tasks.map(elem => {
    const list = lists && lists.length && lists.find(list => list.id === elem.list);

    data.push({
      title: elem.title,
      taskId: elem.id,
      list: list.title,
      boardId: list.board
    });
  });

  data.map(elem => {
    const board = boards && boards.length && boards.find(board => board.id === elem.boardId);

    elem.board = board.title;
  });


  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title'
    },
    {
      title: 'List',
      dataIndex: 'list',
      key: 'list'
    },
    {
      title: 'Board',
      dataIndex: 'board',
      key: 'board'
    },
    {
      dataIndex: 'taskId',
      key: 'taskId',
      render: id => <img className='tasks__delete-icon' src={deleteIcon} alt='delete'/>,
    },
  ];

  return (
    <div className='tasks'>
      <Table columns={columns} dataSource={data}/>
    </div>
  );
};

export default Tasks;
