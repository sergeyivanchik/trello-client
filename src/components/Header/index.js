import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from  'react-redux';

import './index.scss'
import { Popover, Modal } from 'antd';
import userIcon from './icons/user.svg';
import LoginForm from '../LoginForm';

import { logOut } from '../../store/actions/users';
import { getBoardsByUserSuccess } from '../../store/actions/boards';


const Header = () => {
  const [visible, setVisible] = useState(false);

  const user = useSelector(state => state.users.currentUser);
  const dispatch = useDispatch();

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
              setVisible(true);
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

        <Modal
          closable={false}
          onCancel={() => setVisible(false)}
          maskClosable={true}
          footer={null} visible={visible}
        >
          <LoginForm setVisible={setVisible} visible={visible}/>  
        </Modal>
      </div>
    </div>
  );
}

export default Header;
