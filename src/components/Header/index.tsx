import React from 'react';

import './style.scss';
import Logo from '../Logo';

export interface HeaderProps {
  mainPage?: boolean;
}

const Header: React.FC<HeaderProps> = ({ mainPage = false }) => {
  return (
    <header className={`Header ${mainPage ? 'main' : ''}`}>
      <Logo size='large' />
    </header>
  );
};

export default Header;
