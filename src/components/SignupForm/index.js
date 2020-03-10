import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from  'react-redux';

import './index.scss'

import { signUpAsync } from '../../store/actions/users';


const SignupForm = ({ setVisible, visible }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('')

  const currentUser = useSelector(state => state.users.currentUser)
  const dispatch = useDispatch();

  useEffect(() => {
    setPassword('');
    setUsername('');
    setEmail('');
  }, [visible]);

  useEffect(() => {
    if (currentUser) setVisible(false)
  }, [currentUser]);

  return (
  <div class="signup">
    <form class="signup__form">
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
            dispatch(signUpAsync({ username, password, email }))
          }
        }}
      >
        create
      </button>
    </form>
  </div>
  );
}

export default SignupForm;
