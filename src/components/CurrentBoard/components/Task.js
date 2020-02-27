import React, { useState, useEffect } from 'react';

import './Task.scss';
import { Popover } from 'antd';


const Task = ({ title }) => {
  const [ready, setReady] = useState(false);

  const content = (
    <div>
      {title}
  </div>
  )

  return (
      <div className={`task ${ready ? 'task_ready' : ''}`}>
        <Popover content={content} trigger="click">
          <span>{title}</span>
        </Popover>
        <div onClick={() => setReady(!ready)}>	&#10003;</div>
      </div>
  );
};

export default Task;
