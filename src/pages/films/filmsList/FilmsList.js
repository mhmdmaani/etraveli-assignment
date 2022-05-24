import React from 'react';
import style from './filmsList.module.css';
import FilmListItem from './FilmListItem';
import SearchInput from '../../../components/SearchInput/SearchInput';
import { useSearch } from '../../../hooks/useSearch';

function FilmsList({ films, onSelect, selected }) {
  const {
    data: searchResults,
    onChange,
    searchText,
  } = useSearch(films, 'title');

  return (
    <>
      <SearchInput value={searchText} onChange={onChange} />
      {searchResults?.map((film) => (
        <FilmListItem
          key={film.episode_id}
          film={film}
          onSelect={onSelect}
          selected={selected}
        />
      ))}
    </>
  );
}

export default FilmsList;
