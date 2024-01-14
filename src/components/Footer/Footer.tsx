import React, { FC } from 'react';
import classes from './Footer.module.css';
import Logo from '../../assets/images/LogoAdbuy.svg';
import { Link } from 'react-router-dom';
import InstagramLogo from '../../assets/images/icons8-instagram.svg';
import TiktokLogo from '../../assets/images/icons8-tiktok.svg';
import XLogo from '../../assets/images/icons8-twitterx.svg';
import LinkedinLogo from '../../assets/images/icons8-linkedin-logo.svg';
import { useMediaQuery } from 'react-responsive';

const Footer: FC = () => {
  const isMobile = useMediaQuery({
    query: '(max-width: 440px)',
  });

  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <div className={classes.footerBlock}>
          <img src={Logo} className={classes.adbuyLogo} />
          <div className={classes.socialblock}>
            <a
              href="https://instagram.com/adbuy.me"
              className={classes.socialButton}
            >
              <img src={InstagramLogo} className={classes.logo} />
            </a>
            <a
              href="https://www.tiktok.com/@adbuy.me"
              className={classes.socialButton}
            >
              <img src={TiktokLogo} className={classes.logo} />
            </a>
            <a
              href="https://twitter.com/adbuy_me"
              className={classes.socialButton}
            >
              <img src={XLogo} className={classes.logo} />
            </a>
            <a
              href="https://www.linkedin.com/company/adbuyme/"
              className={classes.socialButton}
            >
              <img src={LinkedinLogo} className={classes.logo} />
            </a>
          </div>
        </div>

        {isMobile && <div className={classes.line}></div>}

        <div className={classes.footerInfo}>
          <div className={classes.footerButtons}>
            <Link className={classes.button} to={'privacy'}>
              Privacy Policy
            </Link>

            <Link className={classes.button} to={'refund'}>
              Refund Policy
            </Link>
          </div>

          <div className={classes.footerTextBlock}>
            <div>
              <p className={classes.footerText}>
                Copyright © 2024 Adbuy Inc. All rights reserved.
              </p>
            </div>

            <div className={classes.locContainer}>
              <p className={classes.footerLocText}>
                800 N King Street, Suite 304 1337, Wilmington, DE 19801
              </p>
            </div>

            <div className={classes.locContainer}>
              <p className={classes.footerLocText}>
                For support and refund-related inquiries, please сontact us
              </p>
            </div>

            <div className={classes.locContainer}>
              <p className={classes.footerLocText}>
                at support@adbuy.me or +1 937-551-5557
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
