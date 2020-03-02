import React, { useState, useEffect } from 'react';
import { useDispatch } from "react-redux";

import './Task.scss';
import { Popover } from 'antd';

import { changeTaskAsync } from '../../../store/actions/tasks';


const Task = ({ data, setIsChangeTask }) => {
  const [ready, setReady] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    setIsChangeTask(ready);
  }, [ready]);

  const content = (
    <div>
      {data && data.title}
  </div>
  );

  const drag = e => {
    e.dataTransfer.setData('transfer', e.target.id)
  };

  const noAllowDrop = e => {
    e.stopPropagation();
  };

  return (
      <div
        id={data && data.title}
        className={`task ${data && data.complete ? 'task_ready' : ''}`}
        draggable='true'
        onDragStart={drag}
        onDragOver={noAllowDrop}
      >
        <Popover content={content} trigger="click">
          <span>{data && data.title}</span>
        </Popover>
        <div
          className='task__switcher'
          onClick={() => {
            setReady(!ready);
            dispatch(changeTaskAsync(data && data.id, {complete: !ready}));
          }}
        >
          &#10003;
        </div>
      </div>
  );
};

export default Task;
