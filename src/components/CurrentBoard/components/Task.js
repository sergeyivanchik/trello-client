import React, { useState, useEffect } from 'react';

import './Task.scss';
import { Popover } from 'antd';


const Task = ({ title }) => {
  const [ready, setReady] = useState(false);

  const content = (
    <div>
      {title}
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
        id={title}
        className={`task ${ready ? 'task_ready' : ''}`}
        draggable='true'
        onDragStart={drag}
        onDragOver={noAllowDrop}
      >
        <Popover content={content} trigger="click">
          <span>{title}</span>
        </Popover>
        <div onClick={() => setReady(!ready)}>	&#10003;</div>
      </div>
  );
};

export default Task;
