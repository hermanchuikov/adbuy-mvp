import React, { FC, useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Button, CheckBox, Loader } from '../../ui';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import $api from '../../api/api';
import { useMediaQuery } from 'react-responsive';
import { setCountriesandLanguages } from '../../store/slices/adSlice';
import { setPlatforms } from '../../store/slices/adSlice';
import classes from './Platform.module.css';
import googleImage from '../../assets/images/platform-1.png';
import facebookImage from '../../assets/images/platform-2.png';
import instagramImage from '../../assets/images/platform-3.png';
import tiktokImage from '../../assets/images/platform-4.png';
import { useFetch } from '../../hooks/useFetch';
import { useAppSelector } from '../../hooks/useAppSelector';

const platformList = [
  { name: 'google', image: googleImage, isActive: false },
  { name: 'instagram', image: instagramImage, isActive: false },
  { name: 'facebook', image: facebookImage, isActive: false },
  { name: 'tiktok', image: tiktokImage, isActive: false },
];

interface IPlatform {
  name: string;
  image: string;
  isActive: boolean;
}

const PlatformPage: FC = () => {
  const {
    register,
    control,
    handleSubmit,
    setError,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      google: false,
      facebook: false,
      instagram: false,
      tiktok: false,
    },
  });

  const isMobile = useMediaQuery({
    query: '(max-width: 440px)',
  });

  const [loading, setLoading] = useState(false);
  const [responseError, setResponseError] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmitButton = async (data: object) => {
    console.log(`Data: ${data}`);
    let chosenPlatforms = [];
    for (let platform of Object.entries(data)) {
      if (platform[1] === true) {
        chosenPlatforms.push(platform[0]);
      }
    }

    console.log('Chosen platforms: ' + chosenPlatforms);

    // console.log(chosenPlatforms);
    dispatch(setPlatforms(chosenPlatforms));

    const platformObject = { platforms: chosenPlatforms };
    console.log(platformObject);

    setLoading(true);
    await $api
      .post('language_location', platformObject)
      .then((data: any) => {
        console.log(data.data);
        dispatch(setCountriesandLanguages(data.data));
      })
      .then(() => navigate('/form?mode=custom'))
      .catch((e: any) => {
        console.log(e);
        setResponseError(e.errorMessage);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      {loading && <Loader />}
      <div className={classes.platform}>
        <div className={classes.container}>
          <h2 className={classes.gradientTitle}>Select Platforms · Step 1/3</h2>

          <div className={classes.platformInner}>
            <form onSubmit={handleSubmit(handleSubmitButton)}>
              <div className={classes.platformBlock}>
                {platformList.map((platform) => {
                  return (
                    <CheckBox
                      control={control}
                      name={platform.name}
                      key={platform.name}
                      // isChecked={platform.isActive}
                    >
                      <img
                        src={platform.image}
                        style={{ cursor: 'pointer' }}
                        className={classes.checkboxImage}
                      />
                    </CheckBox>
                  );
                })}
              </div>

              <Button
                title="Continue"
                style={
                  isMobile
                    ? {
                        height: '40px',
                        'font-size': '18.2px',
                        'background-color': '#33d684',
                        padding: 0,
                        'box-shadow': '0px 8px 15px rgba(0, 0, 0, 0.16)',

                        transition: 'all 300ms ease-in',
                      }
                    : {
                        height: '80px',
                        'background-color': '#33d684',
                        'font-size': '25.2px',
                        padding: 0,
                        'box-shadow': '0px 8px 15px rgba(0, 0, 0, 0.16)',

                        transition: 'all 300ms ease-in',
                      }
                }
              />
            </form>
            <div className={classes.errorContainer}>
              {responseError && (
                <p className={classes.errorMessage}>{responseError}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlatformPage;
