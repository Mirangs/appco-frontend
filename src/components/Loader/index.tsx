import React from 'react';
import Loader from 'react-loader-spinner';

import './style.scss';

const Spinner = () => {
  return (
    <div className='Loader'>
      <Loader type='Oval' color='#3A80BA' height={100} width={100} />
    </div>
  );
};

export default Spinner;
