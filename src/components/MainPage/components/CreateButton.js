import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from  'react-redux';

import './CreateButton.scss';
import { Input } from 'antd';

import closeIcon from './icons/close.svg';

import { addBoardAsync } from '../../../store/actions/boards';


const CreateButton = ({ boards }) => {
  const [click, setClick] = useState(false);
  const [closeButtonClick, setCloseButtonClick] = useState(false);
  const [text, setText] = useState('');
  const [emptyInput, setEmptyInput] = useState(false);
  const [cancelClick, setCancelClick] = useState(false);

  const currentUser = useSelector(state => state.users.currentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    if (closeButtonClick || cancelClick) {
      setClick(false);
      setCloseButtonClick(false);
      setEmptyInput(false);
      setCancelClick(false);
    };
  }, [closeButtonClick, cancelClick]);

  useEffect(() => {
    if (text) {
      setEmptyInput(false);
    }
  }, [text, text.length])

  const handleChange = e => {
    setText(e.target.value);

    if (e.target.value === '') {
      setEmptyInput(true);
    } else {
      setEmptyInput(false);
    };
  };

  const handleCreateClick = () => {
    if (text) {
      if (boards) {
        dispatch(addBoardAsync(text));
      } else {
        dispatch(addBoardAsync(text));
      };
      setText('');
      setCloseButtonClick(true);
    } else {
      setEmptyInput(true);
    };
  };

  return (
    <div
      className={
        `create-button ${click ? 'create-button_open' : ''} ${!currentUser ? 'create-button_inactive' : ''}`
      }
      onClick={() => currentUser && setClick(true)}
    >
      {
        !click
          ? <span>Create a new board...</span>
          : <div className='create-button__content'>
              <div className='create-button__header'>
                <span>Creating a board</span>
                <img src={closeIcon} alt='close' onClick={() => setCloseButtonClick(true)}/>
              </div>

              <div className='create-button__form'>
                <span className='create-button__form-title'>
                  What shall we call the board?
                </span>

                <Input
                  size="large"
                  value={text}
                  onChange={handleChange}
                  onBlur={() => !text && setEmptyInput(true)}
                />

                {
                  emptyInput &&
                  <span className='create-button__error'>
                    Oops! Looks like you forgot the name!
                  </span>
                }

                <div className='create-button__buttons'>
                  <span
                    className='create-button__cancel'
                    onClick={() => setCancelClick(true)}
                  >
                    Cancel
                  </span>

                  <span
                    className='create-button__create'
                    onClick={handleCreateClick}
                  >
                    Create
                  </span>
                </div>
              </div> 
            </div>
      }
    </div>
  );
};

export default CreateButton;
