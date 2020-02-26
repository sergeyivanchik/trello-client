import React, { useState, useEffect } from 'react';

import './CreateButton.scss';
import { Input } from 'antd';

import closeIcon from './icons/close.svg';


const CreateButton = () => {
  const [click, setClick] = useState(false);
  const [closeButtonClick, setCloseButtonClick] = useState(false);
  const [text, setText] = useState('');
  const [emptyInput, setEmptyInput] = useState(false);
  const [cancelClick, setCancelClick] = useState(false);



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

  return (
    <div
      className={`create-button ${click ? 'create-button_open' : ''}`}
      onClick={() => setClick(true)}
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
                    // onClick={() => setCancelClick(true)}
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
