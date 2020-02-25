import React, { useState, useEffect } from 'react';

import './Board.scss';


const Board = ({ title }) => {
  return (
    <div className='board'>
      <h2>{title}</h2>
    </div>
  );
};

export default Board;
