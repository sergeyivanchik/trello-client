import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from  'react-redux';

import './index.scss'

import { logInAsync, logOut } from '../../store/actions/users';
import { getBoardsByUserSuccess } from '../../store/actions/boards';


const Header = ({ click, setClick }) => {
  const user = useSelector(state => state.users.currentUser);
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
            if (!user) {
              dispatch(logInAsync(
                {
                  username: 'exampleuser',
                  password: 'examplepassword'
                }
              ));
              setClick(true);
            } else {
              dispatch(logOut());
              dispatch(getBoardsByUserSuccess([]));
            }
          }}
        >
          {
            user ? 'Log Out' : 'Log In'
          }
        </span>

        <div className="header__signup">
          {
            user ? user.username : 'Sign Up'
          }
        </div>
      </div>
    </div>
  );
}

export default Header;
