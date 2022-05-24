import React from 'react';
import style from './SearchInput.module.css';
import { FiSearch } from 'react-icons/fi';

function SearchInput({ value, onChange, placeholder = 'Search' }) {
  return (
    <div className={style.container}>
      <FiSearch />
      <input
        className={style.searchInput}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
}

export default SearchInput;
