import React, { useState, useEffect } from 'react';

import './index.scss';

import boardList from '../MainPage/boards.json';
import AddButton from './components/AddButton';


const CurrentBoard = props => {
  const { boardId } = props.match.params;

  const getBoardTitle = () => {
    const index = boardList &&
      boardList.length &&
      boardList.findIndex(elem => elem.id === +boardId);

    return index >= 0 ? boardList[index] && boardList[index].title : null;
  }

  return (
    <div className='current-board'>
      <div className='current-board__title'>
        <div>
          {getBoardTitle()}
        </div>
      </div>

      <div className='current-board__lists'>
        <AddButton/>
      </div>  
    </div>
  );
};

export default CurrentBoard;
