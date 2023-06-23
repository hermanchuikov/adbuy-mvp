import React, { FC, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import classes from './Welcome.module.css';
import logo from '../../assets/images/Logo.svg';
import headerImage from '../../assets/images/HeaderImage.svg';
import chatGPTImage from '../../assets/images/chatGPT.svg';
import firstImageInfo from '../../assets/images/info1.svg';
import secondImageInfo from '../../assets/images/info2.svg';
import blueCircle from '../../assets/images/blueCircle.svg';
import whiteCircle from '../../assets/images/whiteCircle.svg';
import firstCardImage from '../../assets/images/firstCardImage.svg';
import secondCardImage from '../../assets/images/secondCardImage.svg';
import thirdCardImage from '../../assets/images/thirdCardImage.svg';
import { Footer } from '../../components';

const WelcomePage: FC = () => {
  const isMobile = useMediaQuery({
    query: '(max-width: 440px)',
  });

  const pricingBlock = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const executeScroll = () => {
    if (pricingBlock !== null) {
      //@ts-ignore
      pricingBlock.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={classes.welcome}>
      <header className={classes.header}>
        <div className={classes.nav}>
          <img className={classes.navLogo} src={logo} />
          <button onClick={executeScroll} className={classes.navButton}>
            pricing
          </button>
        </div>
        <div className={classes.container}>
          <div className={classes.headerBlock}>
            {isMobile ? (
              <>
                <h2 className={classes.headerTitle}>
                  Run effective ads on Google, Facebook, Instagram and TikTok in
                  3 minutes
                </h2>
                <img className={classes.headerImage} src={headerImage} />
                <Link to={'platforms'} className={classes.headerButton}>
                  try for
                  <span className={classes.headerButtonText}> 0,99 USD</span>
                </Link>
              </>
            ) : (
              <>
                <div className={classes.headerInfo}>
                  <h2 className={classes.headerTitle}>
                    <span style={{color: '#7F00FF'}}>Run effective ads</span> on Google, Facebook, Instagram and TikTok
                    <span style={{color: '#EE1D52'}}>in 3 minutes</span>
                  </h2>
                  <Link to={'platforms'} className={classes.headerButton}>
                    try for free
                    {/* <span className={classes.headerButtonText}> 0,99 USD</span> */}
                  </Link>
                </div>
                <div className={classes.headerImageBlock}>
                  <img className={classes.headerChatImage} src={chatGPTImage}/>
                  <img className={classes.headerImage} src={headerImage} />
                </div>
              </>
            )}
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

      <div ref={pricingBlock} className={classes.pricing}>
        <div className={classes.pricingContainer}>
          <h3 className={classes.pricingTitle}>Pricing</h3>
          <p className={classes.pricingSubtitle}>
            Everything depends on your budget.
          </p>
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
                      Up to $1,200
                    </p>
                  </div>
                </div>
                <p className={classes.pricingCardPrice}>
                  $179{' '}
                  <span className={classes.pricingCardAdditionalText}>
                    for service
                  </span>
                </p>
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
                      <p className={classes.pricingCardItemText}>
                        All platforms
                      </p>
                    </div>

                    <div className={classes.pricingCardListItem}>
                      <img
                        src={blueCircle}
                        className={classes.pricingCardItemImage}
                      ></img>
                      <p className={classes.pricingCardItemText}>
                        All analytics features
                      </p>
                    </div>

                    <div className={classes.pricingCardListItem}>
                      <img
                        src={blueCircle}
                        className={classes.pricingCardItemImage}
                      ></img>
                      <p className={classes.pricingCardItemText}>
                        Normal support
                      </p>
                    </div>
                  </div>
                </div>
                <button className={classes.pricingCardButton}>
                  Get started
                </button>
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
                      style={{ color: '#fff' }}
                    >
                      Budget
                    </h6>
                    <p
                      className={classes.pricingCardHeaderTitle}
                      style={{ color: '#fff' }}
                    >
                      $1,200 - $2,400
                    </p>
                  </div>
                </div>
                <p
                  className={classes.pricingCardPrice}
                  style={{ color: '#fff' }}
                >
                  $179{' '}
                  <span
                    className={classes.pricingCardAdditionalText}
                    style={{ color: '#fff' }}
                  >
                    for service
                  </span>
                </p>
                <div className={classes.pricingCardListBlock}>
                  <h6
                    className={classes.pricingCardListHeaderTitle}
                    style={{ color: '#fff' }}
                  >
                    What’s included
                  </h6>
                  <div className={classes.pricingCardList}>
                    <div className={classes.pricingCardListItem}>
                      <img
                        src={whiteCircle}
                        className={classes.pricingCardItemImage}
                      ></img>
                      <p
                        className={classes.pricingCardItemText}
                        style={{ color: '#fff' }}
                      >
                        All platforms
                      </p>
                    </div>

                    <div className={classes.pricingCardListItem}>
                      <img
                        src={whiteCircle}
                        className={classes.pricingCardItemImage}
                      ></img>
                      <p
                        className={classes.pricingCardItemText}
                        style={{ color: '#fff' }}
                      >
                        All analytics features
                      </p>
                    </div>

                    <div className={classes.pricingCardListItem}>
                      <img
                        src={whiteCircle}
                        className={classes.pricingCardItemImage}
                      ></img>
                      <p
                        className={classes.pricingCardItemText}
                        style={{ color: '#fff' }}
                      >
                        Premium support
                      </p>
                    </div>
                  </div>
                </div>
                <button
                  className={classes.pricingCardButton}
                  style={{
                    backgroundColor: '#fff',
                    color: '#4A3AFF',
                    fontWeight: 700,
                  }}
                >
                  Get started
                </button>
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
                      More than $2,400
                    </p>
                  </div>
                </div>
                <p className={classes.pricingCardPrice}>
                  $359{' '}
                  <span className={classes.pricingCardAdditionalText}>
                    for service
                  </span>
                </p>
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
                      <p className={classes.pricingCardItemText}>
                        All platforms
                      </p>
                    </div>

                    <div className={classes.pricingCardListItem}>
                      <img
                        src={blueCircle}
                        className={classes.pricingCardItemImage}
                      ></img>
                      <p className={classes.pricingCardItemText}>
                        All analytics features
                      </p>
                    </div>

                    <div className={classes.pricingCardListItem}>
                      <img
                        src={blueCircle}
                        className={classes.pricingCardItemImage}
                      ></img>
                      <p className={classes.pricingCardItemText}>
                        Dedicated support
                      </p>
                    </div>
                  </div>
                </div>
                <button className={classes.pricingCardButton}>
                  Get started
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default WelcomePage;
