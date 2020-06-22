import React from 'react';
import './style.scss';

export interface ButtonProps {
  onClicked: () => void;
  text: string;
  color: 'light' | 'dark';
  [other: string]: any;
}

const Button: React.FC<ButtonProps> = ({
  onClicked,
  text,
  color,
  ...other
}) => {
  return (
    <button
      className={`Button ${color === 'light' ? 'light' : 'dark'}`}
      onClick={onClicked}
      {...other}
    >
      {text}
    </button>
  );
};

export default Button;
