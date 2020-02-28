import React, { useState } from 'react';
import { useSelector } from  'react-redux';

import './index.scss';

import AddButton from './components/AddButton';
import List from './components/List';

import allLists from '../../database/lists.json'


const CurrentBoard = props => {
  const [lists, setLists] = useState(allLists);

  const { boardId } = props.match.params;
  const boardList = useSelector(state => state.boards.allBoards);

  const getBoardTitle = () => {
    const index = boardList &&
      boardList.length &&
      boardList.findIndex(elem => elem.id === +boardId);

    return index >= 0 ? boardList[index] && boardList[index].title : null;
  };

  return (
    <div className='current-board'>
      <div className='current-board__title'>
        <div>
          {getBoardTitle()}
        </div>
      </div>

      <div className='current-board__lists'>
        <AddButton setLists={setLists} lists={lists} boardId={boardId}/>

        {
          lists &&
          !!lists.length &&
          lists.map(elem => elem.boardId === +boardId &&
            <List key={elem.id} data={elem} boardId={boardId}/>
          )
        }
      </div>  
    </div>
  );
};

export default CurrentBoard;
