import React from 'react';
import s from './Notification.module.css';

const Notification = ({ message }) => {
  return <div className={s.message}>{message}</div>;
};
export default Notification;
