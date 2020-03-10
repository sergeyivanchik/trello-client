import React, { useState, useEffect } from 'react';
import { useDispatch } from  'react-redux';

import './List.scss';
import { Input } from 'antd';

import Task from './Task';

import { addTaskAsync } from '../../../store/actions/tasks';


const List = ({ data, tasks, setIsChangeTask }) => {
  const [text, setText] = useState('');
  const [isAddTask, setIsAddTask] = useState(false);

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
        setIsAddTask(false);
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
  };

  const currentTasks = tasks &&
    tasks.length &&
    tasks.findIndex(elem => elem.list === data.id);
  const countTasks = tasks &&
    tasks.length &&
    tasks.filter(elem => elem.list === data.id);

  return (
    <div
      className='list' 
      style={{
        height: countTasks && countTasks.length
          ? 112 + countTasks.length * 62 + 'px'
          : '112px'
      }}
    >
      <div className='list__title'>
        {data && data.title}
      </div>

      <div className='list__tasks' onDrop={drop} onDragOver={allowDrop}>
      {
        tasks &&
        !!tasks.length &&
        tasks.map(elem => elem.list === data.id &&
          <Task data={elem} key={elem.id} setIsChangeTask={setIsChangeTask}/>
        )
      }
      </div>

      {
        !isAddTask &&
        <div
          className='list__add-button'
          onClick={() => setIsAddTask(true)}
        >
          {
            currentTasks >= 0
              ? '+ Add another task'
              : '+ Add task'
          }
        </div>
      }

      {
        isAddTask &&
        <Input
          size="large"
          placeholder='add a task'
          value={text}
          onChange={e => setText(e.target.value)}
          autoFocus
          onBlur={() => setIsAddTask(false)}
        />
      }
    </div>
  );
};

export default List;
