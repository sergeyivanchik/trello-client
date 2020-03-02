import React, { useState, useEffect } from 'react';
import { useDispatch } from  'react-redux';

import './List.scss';
import { Input } from 'antd';

import Task from './Task';

import { addTaskAsync } from '../../../store/actions/tasks';


const List = ({ data, tasks, setIsChangeTask }) => {
  const [text, setText] = useState('');

  const dispatch = useDispatch();
  
  useEffect(() => {
    const onKeyPress = e => {
      if (e.keyCode === 13) {
        if (text && !!text.length) {
          dispatch(addTaskAsync({
            title: text,
            complete: false,
            list: data && data.id
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
        tasks.map(elem => elem.list === data.id &&
          <Task data={elem} key={elem.id} setIsChangeTask={setIsChangeTask}/>
        )
      }
    </div>
  );
};

export default List;
