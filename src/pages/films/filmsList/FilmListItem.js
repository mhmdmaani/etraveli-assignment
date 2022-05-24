import React from 'react';
import IconText from '../../../components/iconText/IconText';
import style from './filmListItem.module.css';
import { BiCameraMovie } from 'react-icons/bi';

export default function FilmListItem({ film, onSelect, selected }) {
  return (
    <div
      onClick={() => onSelect(film)}
      className={
        selected?.episode_id === film.episode_id
          ? style.selectedItemContainer
          : style.itemContainer
      }
    >
      <div className={style.episodeAndReleaseContainer}>
        <span>{`Episode ${film.episode_id}`}</span>
        <span>{film.release_date}</span>
      </div>
      <h4>
        <IconText Icon={<BiCameraMovie />} text={film.title} color='#fff' />
      </h4>
    </div>
  );
}
