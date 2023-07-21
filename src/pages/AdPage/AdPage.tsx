import React, { FC, useEffect, useState } from 'react';
import { AdBanner } from '../../components';
import { useAppSelector } from '../../hooks/useAppSelector';
import { useNavigate, useNavigation } from 'react-router-dom';
import googleImage from '../../assets/images/platform-1.svg';
import facebookImage from '../../assets/images/platform-2.svg';
import instagramImage from '../../assets/images/platform-3.svg';
import tiktokImage from '../../assets/images/platform-4.svg';
import classes from './AdPage.module.css';


const AdPage: FC = () => {
  const { ads } = useAppSelector((state) => state.ad);
  const navigate = useNavigate();

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(ads[0].length / 3);
  const [currentAds, setCurrentAds] = useState(ads[0].slice(0, 3));

  const handlePage = () => {
    if (page < totalPages) {
      setPage((page) => (page += 1));
    } else {
      navigate('/payment');
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  useEffect(() => {
    setCurrentAds(ads[0].slice((page - 1) * 3, (page - 1) * 3 + 3));
  }, [page]);

  // console.log(`Array length: ${ads.length}`)
  // console.log(ads[0])

  return (
    <div className={classes.ad}>
      <div className={classes.adHeader}>
        <div className={classes.adHeaderBlock}>
          <div className={classes.adHeaderBlockInner}>
            <img
              src={
                currentAds[0].platform === 'google'
                  ? googleImage
                  : currentAds[0].platform === 'instagram'
                  ? instagramImage
                  : currentAds[0].platform === 'facebook'
                  ? facebookImage
                  : tiktokImage
              }
              className={classes.adHeaderImage}
            />
            {/* <h6 className={classes.adHeaderPlatform}>
              {currentAds[0].platform === 'google'
                ? 'Google'
                : currentAds[0].platform === 'instagram'
                ? 'Instagram'
                : currentAds[0].platform === 'facebook'
                ? 'Facebook'
                : 'TikTok'}
            </h6> */}
          <h3 className={classes.adHeaderTitle}>
            Select the ad you like the best
          </h3>
          </div>
          <div className={classes.adHeaderEmptyBlock}>

          </div>
        </div>
      </div>
      <div className={classes.adBlock}>
        {currentAds.map((item: any) => {
          return (
            <AdBanner
              type={item.platform}
              username={item?.username}
              button={item?.button}
              photoUrl={item?.photo}
              text={item?.text}
              headline={item?.headline}
              handleClick={handlePage}
              url={item?.url}
              description={item?.description}
              videoUrl={item?.video}
              soundName={item?.sound_name}
            />
          );
        })}
      </div>
      {/* <div className={classes.firstRow}>
        <AdBanner type="instagram" />
        <AdBanner type="instagram" />
      </div>
      <div className={classes.secondRow}>
        <AdBanner type="instagram"/>
      </div> */}
    </div>
  );
};

export default AdPage;
