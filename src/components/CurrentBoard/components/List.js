import React, { useState, useEffect } from 'react';
import { useDispatch } from  'react-redux';

import './List.scss';
import { Input } from 'antd';

import Task from './Task';

import { addTaskSuccess } from '../../../store/actions/tasks';


const List = ({ data, tasks }) => {
  const [text, setText] = useState('');

  const dispatch = useDispatch();
  
  useEffect(() => {
    const onKeyPress = e => {
      if (e.keyCode === 13) {
        if (tasks && tasks.length) {
          if (text && !!text.length) {
            let taskId = tasks &&
              tasks.length &&
              tasks[tasks.length - 1] &&
              tasks[tasks.length - 1].id;
            taskId++;

            dispatch(addTaskSuccess({
              id: taskId,
              listId: data.id,
              title: text
            }));
          }
        } else {
          dispatch(addTaskSuccess({
            id: 1,
            listId: data.id,
            title: text
          }));
        }
        setText('');
      };
    };

    document.addEventListener('keydown', onKeyPress);
  
    return () => {
      document.removeEventListener('keydown', onKeyPress);
    };
  });

  const drop = e => {
    e.preventDefault();

    const data = e.dataTransfer.getData('transfer');
    e.target.appendChild(document.getElementById(data));
  };

  const allowDrop = e => {
    e.preventDefault();
  }

  return (
    <div className='list' onDrop={drop} onDragOver={allowDrop}>
      <div className='list-title'>
        {data && data.title}
      </div>
      <Input
        size="large"
        placeholder='add a task'
        value={text}
        onChange={e => setText(e.target.value)}
      />

      {
        tasks &&
        !!tasks.length &&
        tasks.map(elem => elem.listId === data.id &&
          <Task title={elem.title} key={elem.id}/>
        )
      }
    </div>
  );
};

export default List;
