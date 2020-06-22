import React, { SyntheticEvent } from 'react';

import './style.scss';
import Button from '../../../../components/Button';

const Subscribe = () => {
  const noop = (evt: SyntheticEvent) => {
    evt.preventDefault();
  };

  return (
    <section className='Subscribe'>
      <form
        className='Subscribe__form'
        action='/subscribe'
        method='POST'
        onSubmit={noop}
      >
        <input
          className='Subscribe__input'
          type='email'
          placeholder='Enter your email'
        />
        <Button
          type='submit'
          onClicked={() => {}}
          color='dark'
          text='Subscribe'
        />
      </form>
    </section>
  );
};

export default Subscribe;
