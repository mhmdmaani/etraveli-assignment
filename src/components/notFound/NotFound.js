import React from 'react';
import { GiFilmSpool } from 'react-icons/gi';
import style from './notFound.module.css';

function NotFound({ message }) {
  return (
    <div className={style.container}>
      <GiFilmSpool size={70} />

      <div>{message}</div>
    </div>
  );
}

export default NotFound;
