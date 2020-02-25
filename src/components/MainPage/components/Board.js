import React, { useState, useEffect } from 'react';

import './Board.scss';


const Board = ({ title }) => {
  return (
    <div className='board'>
      <h3>{title}</h3>
    </div>
  );
};

export default Board;
