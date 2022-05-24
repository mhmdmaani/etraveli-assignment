import React from 'react';
import style from './orderBy.module.css';

function OrderBy({ orderKeys = [], onChangeOrder, currentSortKey }) {
  return (
    <div className={style.container}>
      <span className={style.label}>Sort by: </span>
      {orderKeys.map((orderKey) => (
        <div
          onClick={() => onChangeOrder(orderKey)}
          key={orderKey}
          className={
            currentSortKey === orderKey ? style.selectedItem : style.item
          }
        >
          {orderKey?.replace('_', ' ').toUpperCase()}
        </div>
      ))}
    </div>
  );
}

export default OrderBy;
