import React, { useState, useEffect, useRef } from 'react';
import { useDispatch } from  'react-redux';

import './AddButton.scss';
import { Input } from 'antd';

import closeIcon from '../../MainPage/components/icons/close.svg';

import { addListSuccess } from '../../../store/actions/lists';


const AddButton = ({ lists, boardId }) => {
  const [click, setClick] = useState(false);
  const [close, setClose] = useState(false);
  const [text, setText] = useState('');
  const [emptyInput, setEmptyInput] = useState(false);
  const [isRef, setIsRef] = useState(false);

  const inputRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const onKeyPress = e => {
      if (
        e.keyCode === 13 &&
        inputRef &&
        inputRef.current &&
        inputRef.current.props &&
        inputRef.current.props.placeholder === 'add a list'
      ) {
        if (lists && !!lists.length) {
          if (text && !!text.length) {
            let listId = lists &&
              lists.length && lists[lists.length - 1] &&
              lists.length && lists[lists.length - 1].id;
            listId++;
            dispatch(addListSuccess({
              id: listId,
              boardId: +boardId,
              title: text
            }));
          } else {
            setEmptyInput(true);
          };
        } else {
          if (text && !!text.length) {
            dispatch(addListSuccess({
              id: 1,
              boardId: +boardId,
              title: text
            }));
          } else {
            setEmptyInput(true);
          };
        };
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
                onBlur={() => {
                  setEmptyInput(false);
                  setIsRef(false);
                }}
                onFocus={() => setIsRef(true)}
                placeholder='add a list'
                ref={isRef ? inputRef : null}
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
                <span>Give me a name!</span>
              }
            </>
      }
    </div>
  );
};

export default AddButton;
