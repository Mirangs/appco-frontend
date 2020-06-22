import React from 'react';

import './style.scss';
import AdvantagesList from './components/AdvantagesList';

const Advantages = () => {
  return (
    <section className='Advantages'>
      <h2 className='Advantages__title'>
        Why{' '}
        <strong>
          small business owners <br />
          love
        </strong>{' '}
        AppCo?
      </h2>
      <p className='Advantages__description'>
        Our design projects are fresh and simple and will benefit your business
        <br />
        greatly. Learn more about our work!
      </p>
      <AdvantagesList />
    </section>
  );
};

export default Advantages;
