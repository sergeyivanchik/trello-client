import React from 'react';

import { notification } from 'antd';


const Snackbar = ({ type, message, description, isShow }) => {
  const openNotificationWithIcon = () => {
    notification[type]({
      message,
      description,
      placement: 'bottomLeft'
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
