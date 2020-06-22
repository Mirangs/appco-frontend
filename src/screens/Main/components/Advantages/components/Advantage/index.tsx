import React from 'react';
import './style.scss';

export interface AdvantageProps {
  icon: string;
  title: string;
  description: string;
}

const Advantage: React.FC<AdvantageProps> = ({ icon, title, description }) => {
  return (
    <li className='Advantage'>
      <img src={icon} alt={title} />
      <h4 className='Advantage__title'>{title}</h4>
      <p className='Advantage__description'>{description}</p>
    </li>
  );
};

export default Advantage;
