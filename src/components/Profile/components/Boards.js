import React from 'react';
import { useDispatch } from 'react-redux';

import './Boards.scss';
import { Table } from 'antd';

import deleteIcon from '../icons/delete.svg';

import { deleteBoardAsync } from '../../../store/actions/boards';


const Boards = ({ boards, lists, tasks, setISDeleteBoard }) => {
  const dispatch = useDispatch();

  const data = [];
  boards.forEach(elem => {
    data.push({ title: elem.title, boardId: elem.id });
  });

  data.map(elem => {
    const currentLists = lists && lists.length && lists.filter(list => list.board === elem.boardId);

    elem.listsCount = currentLists.length || 0;
    elem.currentLists = currentLists;

    const currentTasks = tasks &&
      tasks.length &&
      tasks.filter(task => currentLists.find(list => list.id === task.list));

    elem.tasksCount = currentTasks.length || 0;
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
      render: id =>
        <img
          className='boards__delete-icon'
          src={deleteIcon}
          alt='delete'
          onClick={() => {
            setISDeleteBoard(true);
            dispatch(deleteBoardAsync(id));
          }}
        />,
    },
  ];

  return (
    <div className='boards'>
      <Table
        columns={columns}
        dataSource={data}
        rowKey={record => record.title + record.boardId + record.tasksCount + record.listsCount}
      />
    </div>
  );
};

export default Boards;
