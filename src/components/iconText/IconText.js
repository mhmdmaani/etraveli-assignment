import React from 'react';
import style from './iconText.module.css';

function IconText({ Icon, text, color, iconSize = 20 }) {
  return (
    <div
      style={{ color: color ? color : 'inherit' }}
      className={style.container}
    >
      <span style={{ fontSize: iconSize, color: color }}>{Icon}</span>
      <span>{text}</span>
    </div>
  );
}

export default IconText;
