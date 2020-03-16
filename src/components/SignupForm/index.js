import React, { useState, useEffect } from 'react';
import { useDispatch } from  'react-redux';

import './index.scss'

import { signUpAsync } from '../../store/actions/users';
import { showSnackbar } from '../../store/actions/snackbar';


const SignupForm = ({ setVisible, visible }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [click, setClick] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    const onKeyPress = e => {
      if (e.keyCode === 13) {
        if (username && password && email) {
          dispatch(signUpAsync({ username, password, email }));
          setClick(true);
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
    setEmail('');
  }, [visible]);

  useEffect(() => {
    if (click && username && password && email) {
      setVisible(false);
      setClick(false);
    }
  }, [click]);

  return (
  <div className="signup">
    <div className="signup__form">
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
      <input
        type="text"
        placeholder="email address"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <button
        onClick={() =>{
          if (username && password && email) {
            dispatch(signUpAsync({ username, password, email }));
            setClick(true);
          } else {
            dispatch(showSnackbar({
              type: 'error',
              message: 'Error',
              description: 'Fill in all the fields!'
            }));
          };
        }}
      >
        sign up
      </button>
    </div>
  </div>
  );
}

export default SignupForm;
