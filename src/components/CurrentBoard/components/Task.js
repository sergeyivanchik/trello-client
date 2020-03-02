import React, { useState } from 'react';

import './Task.scss';
import { Popover } from 'antd';


const Task = ({ data }) => {
  const [ready, setReady] = useState(false);

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
        className={`task ${ready ? 'task_ready' : ''}`}
        draggable='true'
        onDragStart={drag}
        onDragOver={noAllowDrop}
      >
        <Popover content={content} trigger="click">
          <span>{data && data.title}</span>
        </Popover>
        <div onClick={() => setReady(!ready)}>	&#10003;</div>
      </div>
  );
};

export default Task;
