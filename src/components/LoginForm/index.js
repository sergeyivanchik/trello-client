import React, { useState } from 'react';
import { useDispatch } from  'react-redux';

import './index.scss'

import { logInAsync } from '../../store/actions/users';


const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('')

  const dispatch = useDispatch();

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
                  username: 'exampleuser',
                  password: 'examplepassword'
                }
              ));
            }
          }}
        >
          login
        </button>
      </div>
    </div>
  );
}

export default LoginForm;