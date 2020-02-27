import React, { useState, useEffect } from 'react';

import './Board.scss';


const Board = ({ title }) => {
  return (
    <div className='board'>
      <span>{title}</span>
    </div>
  );
};

export default Board;
