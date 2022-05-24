import React from 'react';
import { FiLoader } from 'react-icons/fi';
import style from './loader.module.css';

function Loader() {
  return (
    <div className={style.container}>
      <div className={style.spinner}>
        <FiLoader />
      </div>
    </div>
  );
}

export default Loader;
