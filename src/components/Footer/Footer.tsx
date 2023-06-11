import React, { FC } from 'react';
import classes from './Footer.module.css';

const Footer: FC = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <p className={classes.footerText}>
          Copyright © 2023 Adbuy - All Rights Reserved.
        </p>
        <p className={classes.footerLink}>support@adbuy.me</p>
      </div>
    </footer>
  );
};

export default Footer;
