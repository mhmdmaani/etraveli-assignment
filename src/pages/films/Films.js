import React, { useState } from 'react';
import Loader from '../../components/loading/Loader';
import { useFilms } from '../../hooks/useFilms';
import FilmDetails from './filmDetails/FilmDetails';
import FilmsList from './filmsList/FilmsList';
import style from './films.module.css';

function Films() {
  const [selectedFilm, setSelectedFilm] = useState(null);

  const { data, isLoading } = useFilms();

  if (isLoading === true) return <Loader />;

  return (
    <div className={style.container}>
      <FilmsList
        films={data.results}
        onSelect={(film) => setSelectedFilm(film)}
        selected={selectedFilm}
      />

      <FilmDetails film={selectedFilm} />
    </div>
  );
}

export default Films;
