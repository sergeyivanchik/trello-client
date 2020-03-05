import React, { useState, useEffect, useRef } from 'react';
import { useDispatch } from  'react-redux';

import './AddButton.scss';
import { Input } from 'antd';

import closeIcon from '../../MainPage/components/icons/close.svg';

import { addListAsync } from '../../../store/actions/lists';


const AddButton = ({ boardId, setIsAddList }) => {
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
        if (text && text.length) {
          dispatch(addListAsync({ title: text, board: boardId }));
          setIsAddList(true);
        }
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

              <div
                className='add-button__add-list'
                onClick={() => {
                  if (text && text.length) {
                    dispatch(addListAsync({ title: text, board: boardId }));
                    setIsAddList(true);
                  }
                  setText('');
                }}
              >
                Add a list
              </div>
            </>
      }
    </div>
  );
};

export default AddButton;
