import React from 'react';
import style from './filmDetails.module.css';
import { FaHistory } from 'react-icons/fa';
import { GiFilmProjector, GiDirectorChair } from 'react-icons/gi';
import IconText from '../../../components/iconText/IconText';
import { BiCameraMovie } from 'react-icons/bi';
import NotFound from '../../../components/notFound/NotFound';
function FilmDetails({ film }) {
  if (!film) return <NotFound message='Please select a movie from the list ' />;
  return (
    <div className={style.container}>
      <h3>
        <IconText
          Icon={<BiCameraMovie />}
          text={film?.title}
          iconSize={40}
          color='#fff'
        />
      </h3>

      <div className={style.dateAndProducer}>
        <IconText
          Icon={<FaHistory />}
          text={film?.release_date}
          color='#9e9e9e'
        />
        <IconText
          Icon={<GiFilmProjector />}
          text={film?.producer}
          color='#9e9e9e'
        />
      </div>

      <p className={style.description}>{film?.opening_crawl}</p>

      <div>
        <IconText
          Icon={<GiDirectorChair />}
          text={film?.director}
          color='#9e9e9e'
        />
      </div>
    </div>
  );
}

export default FilmDetails;
