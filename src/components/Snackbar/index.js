import React from 'react';
import { useDispatch } from  'react-redux';

import { notification } from 'antd';

import { hideSnackbar } from '../../store/actions/snackbar';


const Snackbar = ({ type, message, description, isShow }) => {
  const dispatch = useDispatch();

  const openNotificationWithIcon = () => {
    notification[type]({
      message,
      description,
      placement: 'bottomLeft',
      onClose: () => dispatch(hideSnackbar())
    });
  };

  return (
    <>
    {
      isShow &&
      openNotificationWithIcon()
    }
    </>
  );
}

export default Snackbar;
