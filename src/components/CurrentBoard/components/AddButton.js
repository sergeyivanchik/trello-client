import React, { useState, useEffect } from 'react';

import './AddButton.scss';


const CurrentBoard = () => {
  const [click, setClick] = useState(false);

  return (
    <div
      className={`add-button ${click ? 'add-button_open' : ''} `}
      onClick={() => setClick(true)}
    >
      {
        !click
          ? <span className='add-button__title'>Add a list...</span>
          : null
      }
    </div>
  );
};

export default CurrentBoard;
