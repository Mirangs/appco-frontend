import React from 'react';

import './style.scss';
import Logo from '../Logo';

export interface FooterProps {
  mainPage: boolean;
}

const Footer: React.FC<FooterProps> = ({ mainPage }) => {
  return (
    <footer className={`Footer ${mainPage ? 'main' : ''}`}>
      <Logo size='small' />
      <p className='Footer__rights'>All rights reserved by ThemeTags</p>
      <p className='Footer__copyrights'>Copyrights © 2019.</p>
    </footer>
  );
};

export default Footer;
