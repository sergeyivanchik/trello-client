import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from  'react-redux';

import './index.scss'

import { logInAsync } from '../../store/actions/users';
import { showSnackbar } from '../../store/actions/snackbar';


const LoginForm = ({ setVisible, visible }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const currentUser = useSelector(state => state.users.currentUser)
  const dispatch = useDispatch();

  useEffect(() => {
    const onKeyPress = e => {
      if (e.keyCode === 13) {
        if (username && password) {
          dispatch(logInAsync(
            {
              username,
              password
            }
          ));
        };
      };
    };

    document.addEventListener('keypress', onKeyPress);
  
    return () => {
      document.removeEventListener('keypress', onKeyPress);
    };
  });

  useEffect(() => {
    setPassword('');
    setUsername('');
  }, [visible]);

  useEffect(() => {
    if (currentUser) setVisible(false)
  }, [currentUser]);

  return (
    <div className="login">
      <div className="login__form">
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button
          onClick={() => {
            if (username && password) {
              dispatch(logInAsync(
                {
                  username,
                  password
                }
              ));
            } else {
              dispatch(showSnackbar({
                type: 'error',
                message: 'Error',
                description: 'Fill in all the fields!'
              }));
            };
          }}
        >
          login
        </button>
      </div>
    </div>
  );
}

export default LoginForm;