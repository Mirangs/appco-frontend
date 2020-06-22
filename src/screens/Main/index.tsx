import React from 'react';
import './style.scss';

import Layout from '../../components/Layout';
import Promo from './components/Promo';
import Advantages from './components/Advantages';
import Subscribe from './components/Subscribe';

const Main = () => {
  return (
    <Layout mainPage>
      <Promo />
      <Advantages />
      <Subscribe />
    </Layout>
  );
};

export default Main;
