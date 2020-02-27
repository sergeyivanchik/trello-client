import React, { useState, useEffect } from 'react';

import './List.scss';
import { Input } from 'antd';


const List = ({ data }) => {
  return (
    <div className='list'>
      <div className='list-title'>
        {data.title}
      </div>
      <Input size="large" placeholder='add a task'/>
    </div>
  );
};

export default List;
