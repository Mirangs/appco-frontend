import React from 'react';
import './style.scss';

import Advantage from '../Advantage';

import designIcon from '../../img/design.svg';
import secureIcon from '../../img/secure.svg';
import retinaIcon from '../../img/retina.svg';

const index = () => {
  return (
    <ul className='AdvatagesList'>
      <Advantage
        key='1'
        icon={designIcon}
        title='Clean Design'
        description='Increase sales by showing true dynamics of your website.'
      />
      <Advantage
        key='2'
        icon={secureIcon}
        title='Secure Data'
        description='Build your online store’s trust using Social Proof & Urgency.'
      />
      <Advantage
        key='3'
        icon={retinaIcon}
        title='Retina Ready'
        description='Realize importance of social proof in customer’s purchase decision.'
      />
    </ul>
  );
};

export default index;
