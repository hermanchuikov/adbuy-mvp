import React, { FC, useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Button, CheckBox, Loader } from '../../ui';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { useMediaQuery } from 'react-responsive';
import { setCountriesandLanguages } from '../../store/slices/adSlice';
import { setPlatforms } from '../../store/slices/adSlice';
import classes from './Platform.module.css';
import googleImage from '../../assets/images/platform-1.svg';
import facebookImage from '../../assets/images/platform-2.svg';
import instagramImage from '../../assets/images/platform-3.svg';
import tiktokImage from '../../assets/images/platform-4.svg';
import { useFetch } from '../../hooks/useFetch';

const platformList = [
  { name: 'google', image: googleImage, isActive: false },
  { name: 'facebook', image: facebookImage, isActive: false },
  { name: 'instagram', image: instagramImage, isActive: false },
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
    let chosenPlatforms = [];
    for (let platform of Object.entries(data)) {
      if (platform[1] === true) {
        chosenPlatforms.push(platform[0]);
      }
    }

    // console.log(chosenPlatforms);
    dispatch(setPlatforms(chosenPlatforms));

    const platformObject = { platforms: chosenPlatforms };
    console.log(platformObject);

    setLoading(true);
    await axios
      .post('http://3.121.51.155:5000/api/language_location', platformObject)
      .then((data) => {
        dispatch(setCountriesandLanguages(data.data));
      })
      .then(() => navigate('/form'))
      .catch((e) => setResponseError(e.message))
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      {loading && <Loader />}
      <div className={classes.platform}>
        <div className={classes.container}>
          <h2 className={classes.title}>Select platforms</h2>
          <div className={classes.platformInner}>
            <form onSubmit={handleSubmit(handleSubmitButton)}>
              <div className={classes.platformBlock}>
                {platformList.map((platform) => {
                  return (
                    <CheckBox
                      control={control}
                      name={platform.name}
                      key={platform.name}
                      isChecked={platform.isActive}
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
                title="Next page"
                style={
                  isMobile
                    ? {
                        height: '30px',
                        'font-size': '14px',
                        'background-color': '#33d684',
                        'padding': 0,
                      }
                    : {
                        height: '80px',
                        'background-color': '#33d684',
                        'font-size': '24px',
                        'padding': 0,
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
