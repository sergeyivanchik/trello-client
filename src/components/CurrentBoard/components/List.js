import React, { useState, useEffect } from 'react';

import './List.scss';
import { Input } from 'antd';

import Task from './Task';


const List = ({ data, boardId }) => {
  const [text, setText] = useState('');
  const [tasks, setTasks] = useState([]);

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

            tasks.push({
              id: taskId,
              boardId,
              title: text
            });
          }
        } else {
          tasks.push({
            id: 1,
            boardId,
            title: text
          });
        }
        setTasks(Array.from(tasks));
        setText('');
      };
    };

    document.addEventListener('keydown', onKeyPress);
  
    return () => {
      document.removeEventListener('keydown', onKeyPress);
    };
  });

  return (
    <div className='list'>
      <div className='list-title'>
        {data.title}
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
        tasks.map(elem =>
          <Task title={elem.title}/>
        )
      }
    </div>
  );
};

export default List;
