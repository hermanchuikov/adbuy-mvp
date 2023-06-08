import React, { FC } from 'react';
import classes from './Button.module.css';

interface IButtonProps {
  title: string;
  style?: object;
  onButtonClick?: (event: any) => void;
  type?: 'submit' | 'reset' | 'button';
}

const Button: FC<IButtonProps> = ({ title, style, onButtonClick, type }) => {
  return (
    <button
      onClick={(event) => onButtonClick ? onButtonClick(event) : ''}
      className={classes.button}
      style={style}
      type={type}
    >
      {title}
    </button>
  );
};

export default Button;
