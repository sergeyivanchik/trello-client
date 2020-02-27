import React, { useState, useEffect } from 'react';

import './AddButton.scss';
import { Input } from 'antd';

import closeIcon from '../../MainPage/components/icons/close.svg';


const AddButton = ({ setLists, lists, boardId }) => {
  const [click, setClick] = useState(false);
  const [close, setClose] = useState(false);
  const [text, setText] = useState('');
  const [emptyInput, setEmptyInput] = useState(false);

  useEffect(() => {
    const onKeyPress = e => {
      if (e.keyCode === 13) {
        if (lists && !!lists.length) {
          if (text) {
            let listId = lists &&
              lists.length && lists[lists.length - 1] &&
              lists.length && lists[lists.length - 1].id;
            listId++;
            lists.push({
              boardId,
              id: listId,
              title: text
            });
          } else {
            setEmptyInput(true);
          };
        } else {
          lists.push({
            boardId,
            id: 1,
            title: text
          });
        };
        setLists(Array.from(lists));
        setText('');
      };
    };

    document.addEventListener('keydown', onKeyPress);
  
    return () => {
      document.removeEventListener('keydown', onKeyPress);
    };
  });

  useEffect(() => {
    if (close) {
      setClick(false);
      setClose(false);
    };
  }, [close]);

  const handleChange = e => {
    setText(e.target.value);

    if (e.target.value === '') {
      setEmptyInput(true);
    } else {
      setEmptyInput(false);
    };
  };

  return (
    <div
      className={`${click ? 'add-button_open' : 'add-button'} `}
      onClick={() => setClick(true)}
    >
      {
        !click
          ? <span className='add-button__title'>Add a list...</span>
          : <>
              <Input
                size="large"
                value={text}
                onChange={handleChange}
                onBlur={() => !text && setEmptyInput(true)}
                placeholder='add a list'
              />

              <img
                src={closeIcon}
                alt='close'
                onClick={() => {
                  setClose(true);
                  setText('');
                }}
              />

              {
                emptyInput &&
                <span>Gime me a name!</span>
              }
            </>
      }
    </div>
  );
};

export default AddButton;
