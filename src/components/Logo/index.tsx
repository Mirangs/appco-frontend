import React from 'react';
import { Link } from 'react-router-dom';

import './style.scss';

export interface LogoProps {
  size: 'small' | 'large';
}

const Logo: React.FC<LogoProps> = ({ size }) => {
  return (
    <Link to='/' className={`Logo ${size}`}>
      AppCo
    </Link>
  );
};

export default Logo;
