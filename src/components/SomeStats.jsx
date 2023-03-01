import React from 'react';
import { Link } from 'react-router-dom';
import ButtonFunc from './ButtonFunc';
import one from 'image/some-stats.png';
import two from 'image/some-stats-mb.svg';



function But() {
  return (
    <div className="some-stats">
      <div className="some-stats_wrapper _container">
        <div className="header-block">
          <div className="header-block__header">Наша допомога у цифрах</div>
        </div>
        <div className="some-stats-img-block">
          <img className="some-stats-img-block__large" src={one} alt="some-stats" />
          <img className="some-stats-img-block__small" src={two} alt="some-stats" />
        </div>
        <div className="button-single-block-card">
          <Link to="/DocumentPage">
            <ButtonFunc class="card-block__some-stats-button">Всі звіти<img className='card-block__singl-button-arrow' src="/assets/icons/3.svg" alt="arrow" /></ButtonFunc>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default But;
