import React from 'react';
import { useDispatch } from  'react-redux';

import './Lists.scss';
import { Table } from 'antd';

import deleteIcon from '../icons/delete.svg';

import { deleteListAsync } from '../../../store/actions/lists';


const Lists = ({ lists, tasks, boards, setIsDeleteList }) => {
  const dispatch = useDispatch();

  const data = [];
  lists.forEach(elem => {
    const board = boards && boards.length && boards.find(board => board.id === elem.board);

    data.push({ title: elem.title, listId: elem.id, board: board.title });
  });

  data.map(elem => {
    const currentTasks = tasks && tasks.length && tasks.filter(task => task.list === elem.listId);

    elem.tasksCount = currentTasks.length || 0;
  })

  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title'
    },
    {
      title: 'Tasks count',
      dataIndex: 'tasksCount',
      key: 'tasksCount'
    },
    {
      title: 'Board',
      dataIndex: 'board',
      key: 'board'
    },
    {
      dataIndex: 'listId',
      key: 'listId',
      render: id =>
        <img
          className='lists__delete-icon'
          src={deleteIcon}
          alt='delete'
          onClick={() => {
            setIsDeleteList(true);
            dispatch(deleteListAsync(id));
          }}
        />,
    },
  ];

  return (
    <div className='lists'>
      <Table
        columns={columns}
        dataSource={data}
        rowKey={record => record.title + record.board + record.tasksCount + record.listId}
      />
    </div>
  );
};

export default Lists;
