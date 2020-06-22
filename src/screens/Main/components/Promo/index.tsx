import React from 'react';
import { Link } from 'react-router-dom';

import './style.scss';
import mobileImage from './img/main-mobile.png';
import Button from '../../../../components/Button';

const Promo = () => {
  const onViewStatsClicked = () => {};

  return (
    <section className='Promo'>
      <div className='column'>
        <h2 className='Promo__title'>
          <strong>Brainstorming</strong> for desired perfect Usability
        </h2>
        <p className='Promo__description'>
          Our design projects are fresh and simple and will benefit your
          business greatly. Learn more about our work!
        </p>
        <Link to='/users'>
          <Button
            text='View Stats'
            onClicked={onViewStatsClicked}
            color='light'
          />
        </Link>
      </div>
      <div className='column'>
        <img src={mobileImage} alt='Seo consultant Los Angeles, CA' />
      </div>
    </section>
  );
};

export default Promo;
