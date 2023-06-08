import React, { FC, useEffect } from 'react';
import congratsImage from '../../assets/images/congrats.png';
import classes from './CongratsPage.module.css';

const CongratsPage: FC = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div className={classes.congrats}>
      <div className={classes.congratsBlock}>
        <img className={classes.congratsImage} src={congratsImage} />
        <h5 className={classes.congratsTitle}>Done!</h5>
        <p className={classes.congratsText}>
          We are already on the way to run your ads!
        </p>
        <p className={classes.congratsSubtext}>
          You will receive a detailed report by email at the end of the ad
          campaign.
        </p>
      </div>
    </div>
  );
};

export default CongratsPage;
