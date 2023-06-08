import React, { FC, useEffect } from 'react';
import { Link } from 'react-router-dom';
import classes from './Welcome.module.css';
import logo from '../../assets/images/Logo.svg';
import headerImage from '../../assets/images/HeaderImage.svg';
import firstImageInfo from '../../assets/images/info1 (2).svg';
import secondImageInfo from '../../assets/images/info2.svg';

const WelcomePage: FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={classes.welcome}>
      <header className={classes.header}>
        <div className={classes.nav}>
          <img className={classes.navLogo} src={logo} />
        </div>
        <div className={classes.container}>
          <div className={classes.headerBlock}>
            <div className={classes.headerInfo}>
              <h2 className={classes.headerTitle}>
                Run effective ads on Google, Facebook, Instagram and TikTok in 3
                minutes
              </h2>
              <Link to={'platforms'} className={classes.headerButton}>
                try for
                <span className={classes.headerButtonText}> 0,99 USD</span>
              </Link>
            </div>
            <img className={classes.headerImage} src={headerImage} />
          </div>
        </div>
      </header>

      <div className={classes.info}>
        <div className={classes.infoBlock}>
          <img src={firstImageInfo} className={classes.infoBlockImage} />
          <div className={classes.infoBlockInner}>
            <h4 className={classes.infoBlockTitle}>AI-Powered</h4>
            <p className={classes.infoBlockText}>
              AI will generate advertising content, including image processing
              and video creation specifically for your target group.
            </p>
            <Link className={classes.infoBlockButton} to={'platforms'}>
              generate
            </Link>
          </div>
        </div>

        <div className={classes.infoBlock}>
          <img src={secondImageInfo} className={classes.infoBlockImage} />
          <div className={classes.infoBlockInner}>
            <h4 className={classes.infoBlockTitle}>Multi-channel</h4>
            <p className={classes.infoBlockText}>
              We instantly run ads that you liked on the platforms you have
              selected and optimize it throughout the cycle.
            </p>
            <Link className={classes.infoBlockButton} to={'platforms'}>
              run
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
