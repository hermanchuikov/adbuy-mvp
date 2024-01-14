//@ts-nocheck
import React, { FC, useEffect, useState } from 'react';
import { AdBanner } from '../../components';
import { useAppSelector } from '../../hooks/useAppSelector';
import { useNavigate, useNavigation } from 'react-router-dom';
import $api from '../../api/api';
import { useMediaQuery } from 'react-responsive';
import googleImage from '../../assets/images/platform-1.png';
import facebookImage from '../../assets/images/platform-2.png';
import instagramImage from '../../assets/images/platform-3.png';
import tiktokImage from '../../assets/images/platform-4.png';
import classes from './AdPage.module.css';
import { Loader, Button } from '../../ui';
// import { ads } from '../../assets/doomyData/ads';

const AdPage: FC = () => {
    const { ads } = useAppSelector((state) => state.ad);
    const navigate = useNavigate();

    const { adGoal, adWebsite, name, chosenCountries } = useAppSelector(
        (state) => state.ad
    );

    console.log('ads');
    console.log(ads);

    const isMobile = useMediaQuery({
        query: '(max-width: 440px)',
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(ads[0].length);
    const [currentAds, setCurrentAds] = useState(ads[0][page - 1]);

    console.log(currentAds);
    console.log('Total pages: ');
    console.log(totalPages);

    console.log('Ads[0]');
    console.log(ads[0]);

    console.log('Ads[0] length');
    console.log(ads[0].length);


    console.log(`Current page: ${page}`);

    const handlePage = async () => {
        // console.log(id);

        //@ts-ignore
        // const chosenObject = currentAds.find((item) => item.id === id);

        const chosenObject = currentAds;

        const responseData = {
            choice: chosenObject,
        };

        // console.log(responseData);

        if (!chosenObject) {
            setError('There has been an error. Please, try again!');
            return;
        }

        setLoading(true);
        await $api
            .post('get_preview', responseData)
            .catch((e) => console.log(e))
            .finally(() => setLoading(false));

        if (page < totalPages) {
            setPage((page) => (page += 1));
        } else {
            navigate('/payment');
        }
    };

    const handleRegenerate = async () => {
        const currentPlatform = currentAds.platform;
        console.log(currentPlatform);
        console.log(chosenCountries);

        const generateObject = new FormData();
        generateObject.append('platforms', currentPlatform.toString());
        generateObject.append('goal', adGoal);
        generateObject.append('location', chosenCountries);
        generateObject.append('headline', name);
        generateObject.append('url', adWebsite);

        console.log(generateObject);

        setLoading(true);
        await $api
            .post('generate', generateObject)
            .then((data) => {
                console.log(data);
                console.log(data.data.ads);
                let responseData = data.data.ads[0];
                setCurrentAds(responseData);
            })
            .catch((e) => console.log(e))
            .finally(() => setLoading(false));
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        setCurrentAds(ads[0][page - 1]);
    }, [page]);

    return (
        <>
            {loading && (
                <Loader
                    children={
                        <>
                            <p className={classes.loaderText}><b>AI</b> generates ad creative.</p>
                            <p className={classes.loaderText}>
                                Please wait about <b>30 seconds</b>.
                            </p>
                        </>
                    }
                />
            )}

            {isMobile ? (
                <div className={classes.ad}>
                    <div className={classes.adBlock}>
                        <div className={classes.adHeader}>
                            <div className={classes.adHeaderBlock}>
                                <div className={classes.adHeaderBlockInner}>
                                    <img
                                        src={
                                            currentAds.platform === 'google'
                                                ? googleImage
                                                : currentAds.platform === 'instagram'
                                                    ? instagramImage
                                                    : currentAds.platform === 'facebook'
                                                        ? facebookImage
                                                        : tiktokImage
                                        }
                                        className={classes.adHeaderImage}
                                    />
                                    <h2 className={classes.gradientTitle}>
                                        Do you like this Ad Creative?
                                    </h2>
                                </div>
                                <div className={classes.adHeaderEmptyBlock}></div>
                            </div>
                        </div>
                        <AdBanner
                            id={currentAds?.id}
                            type={currentAds?.platform}
                            username={currentAds?.username}
                            button={currentAds?.button}
                            photoUrl={currentAds?.photo}
                            favicon_url={currentAds?.favicon_url}
                            text={currentAds?.text}
                            headline={currentAds?.headline}
                            handleClick={handlePage}
                            url={currentAds?.url}
                            description={currentAds?.description}
                            videoUrl={currentAds?.video}
                            soundName={currentAds?.sound_name}
                        />
                        <div className={classes.buttonBlock}>
                            <Button
                                title="Yes, continue"
                                style={
                                    isMobile
                                        ? {
                                            height: '47px',
                                            'font-size': '14px',
                                            'background-color': '#33d684',
                                            padding: 0,
                                            'box-shadow': '0px 8px 15px rgba(0, 0, 0, 0.16)',
                                            'margin-bottom': '25px',
                                        }
                                        : {
                                            height: '80px',
                                            'background-color': '#33d684',
                                            'font-size': '24px',
                                            padding: 0,
                                            'box-shadow': '0px 8px 15px rgba(0, 0, 0, 0.16)',
                                            'margin-bottom': '25px',
                                        }
                                }
                                onButtonClick={handlePage}
                            />

                            <Button
                                title="Regenerate"
                                onButtonClick={handleRegenerate}
                                style={
                                    isMobile
                                        ? {
                                            height: '47px',
                                            'font-size': '14px',
                                            'background-color': '#FF3F3F',
                                            padding: 0,
                                            'box-shadow': '0px 8px 15px rgba(0, 0, 0, 0.16)',
                                            'margin-bottom': '25px',
                                        }
                                        : {
                                            height: '80px',
                                            'background-color': '#FF3F3F',
                                            'font-size': '24px',
                                            padding: 0,
                                            'box-shadow': '0px 8px 15px rgba(0, 0, 0, 0.16)',
                                            'margin-bottom': '25px',
                                        }
                                }
                            />
                        </div>
                    </div>
                </div>
            ) : (
                <div className={classes.ad}>
                    <div className={classes.adBlock}>
                        <>
                            <AdBanner
                                id={currentAds?.id}
                                type={currentAds?.platform}
                                username={currentAds?.username}
                                button={currentAds?.button}
                                photoUrl={currentAds?.photo}
                                favicon_url={currentAds?.favicon_url}
                                text={currentAds?.text}
                                headline={currentAds?.headline}
                                handleClick={handlePage}
                                url={currentAds?.url}
                                description={currentAds?.description}
                                videoUrl={currentAds?.video}
                                soundName={currentAds?.sound_name}
                            />
                            <div className={classes.adHeader}>
                                <div className={classes.adHeaderBlock}>
                                    <div className={classes.adHeaderBlockInner}>
                                        <img
                                            src={
                                                currentAds.platform === 'google'
                                                    ? googleImage
                                                    : currentAds.platform === 'instagram'
                                                        ? instagramImage
                                                        : currentAds.platform === 'facebook'
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
                                        <h2 className={classes.gradientTitle}>
                                            Do you like this Ad Creative?
                                        </h2>
                                    </div>
                                    <div className={classes.adHeaderEmptyBlock}></div>
                                </div>

                                <Button
                                    title="Yes, continue"
                                    style={
                                        isMobile
                                            ? {
                                                height: '47px',
                                                'font-size': '14px',
                                                'background-color': '#33d684',
                                                padding: 0,
                                                'box-shadow': '0px 8px 15px rgba(0, 0, 0, 0.16)',
                                                'margin-bottom': '25px',
                                            }
                                            : {
                                                height: '80px',
                                                'background-color': '#33d684',
                                                'font-size': '24px',
                                                padding: 0,
                                                'box-shadow': '0px 8px 15px rgba(0, 0, 0, 0.16)',
                                                'margin-bottom': '25px',
                                            }
                                    }
                                    onButtonClick={handlePage}
                                />

                                <Button
                                    title="Regenerate"
                                    onButtonClick={handleRegenerate}
                                    style={
                                        isMobile
                                            ? {
                                                height: '47px',
                                                'font-size': '14px',
                                                'background-color': '#FF3F3F',
                                                padding: 0,
                                                'box-shadow': '0px 8px 15px rgba(0, 0, 0, 0.16)',
                                                'margin-bottom': '25px',
                                            }
                                            : {
                                                height: '80px',
                                                'background-color': '#FF3F3F',
                                                'font-size': '24px',
                                                padding: 0,
                                                'box-shadow': '0px 8px 15px rgba(0, 0, 0, 0.16)',
                                                'margin-bottom': '25px',
                                            }
                                    }
                                />
                            </div>
                        </>
                    </div>
                </div>
            )}

            {/* <div className={classes.firstRow}>
        <AdBanner type="instagram" />
        <AdBanner type="instagram" />
      </div>
      <div className={classes.secondRow}>
        <AdBanner type="instagram"/>
      </div> */}
        </>
    );
};

export default AdPage;
