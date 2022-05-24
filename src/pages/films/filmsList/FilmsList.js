import React from 'react';
import style from './filmsList.module.css';
import FilmListItem from './FilmListItem';
function FilmsList({ films, onSelect, selected }) {
  return (
    <>
      {films?.map((film) => (
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
