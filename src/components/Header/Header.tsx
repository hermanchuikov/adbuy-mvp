import React, { FC } from 'react';
import classes from './Header.module.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/Logo.svg';

const Header: FC = () => {
  return (
    <div className={classes.header}>
      <Link to={'/'}>
        <img className={classes.logo} src={logo} />
      </Link>
    </div>
  );
};

export default Header;
