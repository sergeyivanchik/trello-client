import React from 'react';

import './Board.scss';


const Board = ({ title }) => {
  const getText = title => {
    if (title.length > 15) {
      return title.slice(0, 15) + '...'
    } else {
      return title;
    };
  };

  return (
    <div className='board'>
      <span>{getText(title)}</span>
    </div>
  );
};

export default Board;
