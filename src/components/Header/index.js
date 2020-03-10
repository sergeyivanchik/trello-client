import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from  'react-redux';

import './index.scss'
import { Popover } from 'antd';
import userIcon from './icons/user.svg';

import { logInAsync, logOut } from '../../store/actions/users';
import { getBoardsByUserSuccess } from '../../store/actions/boards';


const Header = ({ click, setClick }) => {
  const user = useSelector(state => state.users.currentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    setClick(false);
  }, [click]);

  const popoverContent = username => (
    <div className='popover'>
      {username}
    </div>
  )

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

        {
          !user
            ? <div className="header__signup">
                Sign Up
              </div>
            : <Popover content={popoverContent(user.username)} placement="left">
              <div className='header__profile'>
                <img alt='profile' src={userIcon}/>
              </div>
              </Popover>

        }
      </div>
    </div>
  );
}

export default Header;
