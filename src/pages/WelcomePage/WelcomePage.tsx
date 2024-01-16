import { FC, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import classes from './Welcome.module.css';
import logo from '../../assets/images/NewestAdbuyLogo.svg';
import headerImage from '../../assets/images/headerImageNew.png';
import firstImageInfoNew from '../../assets/images/infoFirstImageNewest.png';
import secondImageInfo from '../../assets/images/infoSecondImageNew.png';
import blueCircle from '../../assets/images/blueCircle.svg';
import whiteCircle from '../../assets/images/whiteCircle.svg';
import firstCardImage from '../../assets/images/firstCardImageNew.svg';
import secondCardImage from '../../assets/images/secondCardImageNew.svg';
import thirdCardImage from '../../assets/images/thirdCardImageNew.svg';
import googleImage from '../../assets/images/platform-1.png';
import facebookImage from '../../assets/images/platform-2.png';
import instagramImage from '../../assets/images/platform-3.png';
import tiktokImage from '../../assets/images/platform-4.png';
import stripeImage from '../../assets/images/stripe_white.svg';
import { Footer } from '../../components';

const TARIFF_PLANS = {
  month: {
    low: { price: 8, discountPrice: 10 },
    medium: { price: 14, discountPrice: 17 },
    high: { price: 21, discountPrice: 25 },
  },
  year: {
    low: { price: 48, discountPrice: 96 },
    medium: { price: 84, discountPrice: 168 },
    high: { price: 126, discountPrice: 252 },
  },
};

const WelcomePage: FC = () => {
  const isMobile = useMediaQuery({
    query: '(max-width: 440px)',
  });

  const [isOpenNav, setOpenNav] = useState(false);
  const [tariff, setTariff] = useState<'month' | 'year'>('month');

  const pricingBlock = useRef(null);

  useEffect(() => {
    if (isOpenNav) {
      // document.body.style.overflow = 'hidden';
      document.documentElement.style.overflowY = 'hidden';
    } else {
      // document.body.style.overflow = 'scroll';
      document.documentElement.style.overflowY = 'scroll';
    }

    return () => {
      document.documentElement.style.overflowY = 'scroll';
    };
  }, [isOpenNav]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const executeScroll = () => {
    if (pricingBlock !== null) {
      setOpenNav(false);
      //@ts-ignore
      // pricingBlock.current.scrollIntoView({
      //   behavior: 'smooth',
      // });
      // window.scrollBy(0, -10);
      let offset;
      if (isMobile) {
        offset = 67;
      } else {
        offset = 77;
      }

      window.scrollTo({
        behavior: 'smooth',

        top:
          //@ts-ignore
          pricingBlock?.current.getBoundingClientRect().top -
          document.body.getBoundingClientRect().top -
          offset,
      });
    }
  };

  return (
    <div className={classes.welcome}>
      <header className={classes.header}>
        <div className={classes.leftCircle}></div>
        <div className={classes.rightCircle}></div>

        <div className={classes.nav}>
          <button
            onClick={() => window.scrollTo({ behavior: 'smooth', top: 0 })}
            className={classes.logoButton}
          >
            <img className={classes.navLogo} src={logo} />
          </button>

          {isMobile ? (
            <>
              <button
                onClick={() => setOpenNav((prev) => !prev)}
                className={classes.hamburger}
              >
                <div
                  className={`${classes.hamburgerLine} ${
                    isOpenNav ? classes.closeFirstLine : ''
                  }`}
                ></div>
                <div
                  className={`${classes.hamburgerLine} ${
                    isOpenNav ? classes.closeSecondLine : ''
                  }`}
                ></div>
                <div
                  className={`${classes.hamburgerLine} ${
                    isOpenNav ? classes.closeThirdLine : ''
                  }`}
                ></div>
              </button>
              <div
                className={`${classes.mobileNav} ${
                  isOpenNav ? classes.open : ''
                }`}
              >
                <ul className={classes.mobileNavList}>
                  <li className={classes.mobileNavLink}>Home</li>
                  <li onClick={executeScroll} className={classes.mobileNavLink}>
                    Pricing
                  </li>
                </ul>
                <div className={classes.mobileLoginBlock}>
                  <Link className={classes.signInLink} to={'/signIn'}>
                    Sign in
                  </Link>
                  <Link className={classes.signUpLink} to={'/signUp'}>
                    Sign up
                  </Link>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className={classes.linkBlock}>
                <a
                  onClick={() =>
                    window.scrollTo({ behavior: 'smooth', top: 0 })
                  }
                  className={classes.mainLink}
                >
                  Home
                </a>
                <a className={classes.mainLink} onClick={executeScroll}>
                  Pricing
                </a>
              </div>
              <div className={classes.loginLinksBlock}>
                <Link className={classes.signInLink} to={'/signIn'}>
                  Sign in
                </Link>
                <Link className={classes.signUpLink} to={'/signUp'}>
                  Sign up
                </Link>
              </div>
            </>
          )}
        </div>
        <div className={classes.container}>
          <div className={classes.headerBlock}>
            {isMobile ? (
              <>
                <h2 className={classes.headerTitle}>
                  <span className={classes.gradientTitle}>
                    Launch Effective Ads
                  </span>{' '}
                  on Google, Facebook, Instagram and TikTok
                  <span className={classes.gradientTitle}> in 1 minute!</span>
                </h2>
                <img className={classes.headerImage} src={headerImage} />
                <Link to={'platforms'} className={classes.headerButton}>
                  try now
                </Link>

                <img src={stripeImage} className={classes.stripeImage} />
              </>
            ) : (
              <>
                <div className={classes.headerInfo}>
                  <h2 className={classes.headerTitle}>
                    <span className={classes.gradientTitle}>
                      Boost </span>{' 🚀'}
                      <br></br>
                    <span className={classes.gradientTitle}>
                      Your Sales
                    </span>{' '}
                    with AI
                    <br></br>
                    <span className={classes.gradientTitle} >
                      in seconds!
                    </span>
                  </h2>

                  <div className={classes.headerButtonContainer}>
                    <Link to={'platforms'} className={classes.headerButton}>
                      Try For Free
                      {/* <span className={classes.headerButtonText}> 0,99 USD</span> */}
                    </Link>

                    <img src={stripeImage} className={classes.stripeImage} />
                  </div>
                </div>
                <div className={classes.headerImageBlock}>
                  {/* <img className={classes.headerChatImage} src={chatGPTImage} /> */}
                  <img className={classes.headerImage} src={headerImage} />
                </div>
              </>
            )}
          </div>
          <div className={classes.headerFooter}>
            {/*<p className={classes.headerFooterText}>*/}
            {/*  <span className={classes.headerFooterTextRed}>*/}
            {/*    7-day Free Trial*/}
            {/*  </span>{' '}*/}
            {/*  <span className={classes.headerFooterTextBlue}>in seconds!</span>*/}
            {/*</p>*/}
          </div>
        </div>
      </header>

      <div className={classes.info}>
        <div className={classes.infoBlock}>
          <img src={firstImageInfoNew} className={classes.infoBlockImageAI} />
          <div className={classes.infoBlockInnerAI}>
            <h4 className={classes.infoBlockTitle}>AI-Powered</h4>
            <p className={classes.infoBlockText}>
              <b>AI</b> will generate ad creatives
              <br /> including images and videos
              <br /> specifically for your target group
              <br /> with <b>GPT-4 Turbo</b> and <b>DALL·E 3</b>
              {/*<b /> <b>AI</b> will generate advertising */}
              {/*<br /> with using <b>GPT-4</b> for text*/}
              {/*<br /> and <b>DALL·E 3</b> for images and videos*/}
              {/*<br /> specifically for your target group.*/}
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
              We <b>instantly</b> launch ads
              <br /> on the selected platforms
              <br /> and endlessly <b>optimize</b> them
            </p>
            <Link className={classes.infoBlockButton} to={'platforms'}>
              Launch
            </Link>
          </div>
        </div>
      </div>

      <div className={classes.pricingImage}>
        <div ref={pricingBlock} className={classes.pricing}>
          <div className={classes.pricingContainer}>
            <h3 className={classes.pricingTitle}>Pricing</h3>
            <p className={classes.pricingSubtitle}>Fits every budget</p>
            <div className={classes.tariffBlock}>
              <button
                onClick={() => setTariff('month')}
                className={`${classes.tariffButton} ${
                  tariff === 'month' ? classes.active : null
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setTariff('year')}
                className={`${classes.tariffButton} ${
                  tariff === 'year' ? classes.active : null
                }`}
              >
                Yearly
              </button>
            </div>
            <div className={classes.pricingBlock}>
              <div className={classes.pricingAdditionalCard}>
                <div className={classes.pricingContainer}>
                  <div className={classes.pricingCardHeader}>
                    <img
                      src={firstCardImage}
                      className={classes.pricingCardHeaderImage}
                    ></img>
                    <div className={classes.pricingCardHeaderBlock}>
                      <h6 className={classes.pricingHeaderSuptitle}>Budget</h6>
                      <p className={classes.pricingCardHeaderTitle}>
                        Up to $499
                      </p>
                    </div>
                  </div>
                  <div className={classes.pricingCardBlock}>
                    {tariff === 'year' && (
                      <p className={classes.pricingOld}>
                        ${TARIFF_PLANS[tariff].low.discountPrice}
                        <span className={classes.pricingOldLine}></span>
                      </p>
                    )}
                    <p className={classes.pricingCardPrice}>
                      ${TARIFF_PLANS[tariff].low.price}{' '}
                      <span className={classes.pricingCardAdditionalText}>
                        for service
                      </span>
                    </p>
                  </div>
                  <div className={classes.pricingCardListBlock}>
                    <h6 className={classes.pricingCardListHeaderTitle}>
                      What’s included
                    </h6>
                    <div className={classes.pricingCardList}>
                      <div className={classes.pricingCardListItem}>
                        <img
                          src={blueCircle}
                          className={classes.pricingCardItemImage}
                        ></img>

                        <p className={classes.pricingCardItemText}>Instant Launch</p>

                        <img
                          src={googleImage}
                          className={classes.pricingCardPlatformImage}
                        ></img>

                        <img
                          src={facebookImage}
                          className={classes.pricingCardPlatformImage}
                        ></img>

                        <img
                          src={instagramImage}
                          className={classes.pricingCardPlatformImage}
                        ></img>

                        <img
                          src={tiktokImage}
                          className={classes.pricingCardPlatformImage}
                        ></img>
                      </div>

                      <div className={classes.pricingCardListItem}>
                        <img
                          src={blueCircle}
                          className={classes.pricingCardItemImage}
                        ></img>
                        <p className={classes.pricingCardItemText}>
                          Ad Accounts Creation
                        </p>
                      </div>

                      <div className={classes.pricingCardListItem}>
                        <img
                          src={blueCircle}
                          className={classes.pricingCardItemImage}
                        ></img>
                        <p className={classes.pricingCardItemText}>
                          Unlimited Ad Generation with GPT-4 and DALL·E 3
                        </p>
                      </div>

                      <div className={classes.pricingCardListItem}>
                        <img
                          src={blueCircle}
                          className={classes.pricingCardItemImage}
                        ></img>
                        <p className={classes.pricingCardItemText}>
                          AI Campaign Optimization
                        </p>
                      </div>

                      <div className={classes.pricingCardListItem}>
                        <img
                          src={blueCircle}
                          className={classes.pricingCardItemImage}
                        ></img>
                        <p className={classes.pricingCardItemText}>
                          Campaign Reporting
                        </p>
                      </div>
                    </div>
                  </div>
                  <Link to={'platforms'} className={classes.pricingCardButton}>
                    Get 7-day Free Trial
                  </Link>
                </div>
              </div>
              <div className={classes.pricingMainCard}>
                <div className={classes.pricingContainer}>
                  <div className={classes.pricingCardHeader}>
                    <img
                      src={secondCardImage}
                      className={classes.pricingCardHeaderImage}
                    ></img>
                    <div className={classes.pricingCardHeaderBlock}>
                      <h6
                        className={classes.pricingHeaderSuptitle}
                      >
                        Budget
                      </h6>
                      <p
                        className={classes.pricingCardHeaderTitle}
                      >
                        $500 - $1,499
                      </p>
                    </div>
                  </div>
                  <div className={classes.pricingCardBlock}>
                    {tariff === 'year' && (
                      <p
                        className={classes.pricingOld}
                      >
                        ${TARIFF_PLANS[tariff].medium.discountPrice}
                        <span
                          className={classes.pricingOldLine}
                        ></span>
                      </p>
                    )}
                    <p
                      className={classes.pricingCardPrice}
                    >
                      ${TARIFF_PLANS[tariff].medium.price}{' '}
                      <span
                        className={classes.pricingCardAdditionalText}
                      >
                        for service
                      </span>
                    </p>
                  </div>
                  <div className={classes.pricingCardListBlock}>
                    <h6
                      className={classes.pricingCardListHeaderTitle}
                    >
                      What’s included
                    </h6>
                    <div className={classes.pricingCardList}>
                      <div className={classes.pricingCardListItem}>
                        <img
                          src={blueCircle}
                          className={classes.pricingCardItemImage}
                        ></img>
                        <p
                          className={classes.pricingMainCardItemText}
                        >
                          Launch on
                        </p>

                        <img
                          src={googleImage}
                          className={classes.pricingCardPlatformImage}
                        ></img>

                        <img
                          src={facebookImage}
                          className={classes.pricingCardPlatformImage}
                        ></img>

                        <img
                          src={instagramImage}
                          className={classes.pricingCardPlatformImage}
                        ></img>

                        <img
                          src={tiktokImage}
                          className={classes.pricingCardPlatformImage}
                        ></img>
                      </div>

                      <div className={classes.pricingCardListItem}>
                        <img
                          src={blueCircle}
                          className={classes.pricingCardItemImage}
                        ></img>
                        <p
                          className={classes.pricingMainCardItemText}
                        >
                          Ad Accounts Creation
                        </p>
                      </div>

                      <div className={classes.pricingCardListItem}>
                        <img
                          src={blueCircle}
                          className={classes.pricingCardItemImage}
                        ></img>
                        <p
                          className={classes.pricingMainCardItemText}
                        >
                          Unlimited Ad Generation with GPT-4 and DALL·E 3
                        </p>
                      </div>

                      <div className={classes.pricingCardListItem}>
                        <img
                          src={blueCircle}
                          className={classes.pricingCardItemImage}
                        ></img>
                        <p
                          className={classes.pricingMainCardItemText}
                        >
                          AI Campaign Optimization
                        </p>
                      </div>

                      <div className={classes.pricingCardListItem}>
                        <img
                          src={blueCircle}
                          className={classes.pricingCardItemImage}
                        ></img>
                        <p
                          className={classes.pricingMainCardItemText}
                        >
                          Campaign Reporting
                        </p>
                      </div>
                    </div>
                  </div>
                  <Link
                    to={'platforms'}
                    className={classes.pricingMainCardButton}
                  >
                    Get Free Trial
                  </Link>
                </div>
              </div>
              <div className={classes.pricingAdditionalCard}>
                <div className={classes.pricingContainer}>
                  <div className={classes.pricingCardHeader}>
                    <img
                      src={thirdCardImage}
                      className={classes.pricingCardHeaderImage}
                    ></img>
                    <div className={classes.pricingCardHeaderBlock}>
                      <h6 className={classes.pricingHeaderSuptitle}>Budget</h6>
                      <p className={classes.pricingCardHeaderTitle}>
                        Over $1,499
                      </p>
                    </div>
                  </div>
                  <div className={classes.pricingCardBlock}>
                    {tariff === 'year' && (
                      <p className={classes.pricingOld}>
                        ${TARIFF_PLANS[tariff].high.discountPrice}
                        <span className={classes.pricingOldLine}></span>
                      </p>
                    )}
                    <p className={classes.pricingCardPrice}>
                      ${TARIFF_PLANS[tariff].high.price}{' '}
                      <span className={classes.pricingCardAdditionalText}>
                        for service
                      </span>
                    </p>
                  </div>

                  <div className={classes.pricingCardListBlock}>
                    <h6 className={classes.pricingCardListHeaderTitle}>
                      What’s included
                    </h6>
                    <div className={classes.pricingCardList}>
                      <div className={classes.pricingCardListItem}>
                        <img
                          src={blueCircle}
                          className={classes.pricingCardItemImage}
                        ></img>
                        <p className={classes.pricingCardItemText}>Launch on</p>

                        <img
                          src={googleImage}
                          className={classes.pricingCardPlatformImage}
                        ></img>

                        <img
                          src={facebookImage}
                          className={classes.pricingCardPlatformImage}
                        ></img>

                        <img
                          src={instagramImage}
                          className={classes.pricingCardPlatformImage}
                        ></img>

                        <img
                          src={tiktokImage}
                          className={classes.pricingCardPlatformImage}
                        ></img>
                      </div>

                      <div className={classes.pricingCardListItem}>
                        <img
                          src={blueCircle}
                          className={classes.pricingCardItemImage}
                        ></img>
                        <p className={classes.pricingCardItemText}>
                          Ad Accounts Creation
                        </p>
                      </div>

                      <div className={classes.pricingCardListItem}>
                        <img
                          src={blueCircle}
                          className={classes.pricingCardItemImage}
                        ></img>
                        <p className={classes.pricingCardItemText}>
                          Unlimited Ad Generation with GPT-4 and DALL·E 3
                        </p>
                      </div>

                      <div className={classes.pricingCardListItem}>
                        <img
                          src={blueCircle}
                          className={classes.pricingCardItemImage}
                        ></img>
                        <p className={classes.pricingCardItemText}>
                          AI Campaign Optimization
                        </p>
                      </div>

                      <div className={classes.pricingCardListItem}>
                        <img
                          src={blueCircle}
                          className={classes.pricingCardItemImage}
                        ></img>
                        <p className={classes.pricingCardItemText}>
                          Campaign Reporting
                        </p>
                      </div>
                    </div>
                  </div>
                  <Link to={'platforms'} className={classes.pricingCardButton}>
                    Get 7-day Free Trial
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default WelcomePage;
