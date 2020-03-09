import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from  'react-redux';

import './index.scss'

import { logInAsync } from '../../store/actions/users';


const Header = () => {
  const [click, setClick] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    setClick(false);
  }, [click]);

  return (
    <div className="header">
      <Link to={'/'}>
        <span className="header__title">
          Trello
        </span>
      </Link>

      <div className="header__auth">
        <span
          className="header__login"
          onClick={() => {
            dispatch(logInAsync(
              {
                username: 'exampleuser',
                password: 'examplepassword'
              }
            ));
            setClick(true);
          }}
        >
          Log In
        </span>

        <div className="header__signup">
          Sign Up
        </div>
      </div>
    </div>
  );
}

export default Header;
