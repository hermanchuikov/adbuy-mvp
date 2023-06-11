import React, { FC, useEffect, useState } from 'react';
import { useForm, Controller, useWatch } from 'react-hook-form';
import {
  Input,
  Button,
  RadioButtonGroup,
  CustomSelect,
  CheckBox,
  ImagePicker,
  Loader,
} from '../../ui';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks/useAppSelector';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { setAdInfo } from '../../store/slices/adSlice';
import axios from 'axios';
// import Select from 'react-select';
import googleImage from '../../assets/images/platform-1.svg';
import facebookImage from '../../assets/images/platform-2.svg';
import instagramImage from '../../assets/images/platform-3.svg';
import tiktokImage from '../../assets/images/platform-4.svg';
import classes from './Form.module.css';
import { useDispatch } from 'react-redux';

const locationOptions = [
  { value: 'Ukraine', label: 'Ukraine' },
  { value: 'USA', label: 'USA' },
  { value: 'France', label: 'France' },
  { value: 'Belgium', label: 'Belgium' },
  { value: 'Germany', label: 'Germany' },
];

const languageOptions = [
  { label: 'Ukrainian', value: 'Ukrainian' },
  { value: 'American', label: 'American' },
  { value: 'French', label: 'French' },
  { value: 'German', label: 'German' },
];

const adGoals = [
  { value: 'Website Traffic', label: 'Website Traffic' },
  { value: 'Leads', label: 'Leads' },
  {
    value: 'App promotion',
    label: 'App promotion - get new users to install your app',
  },
  { value: 'Sales', label: 'Sales' },
];

const platformList = [
  { name: 'google', image: googleImage, isActive: false },
  { name: 'facebook', image: facebookImage, isActive: false },
  { name: 'instagram', image: instagramImage, isActive: false },
  { name: 'tiktok', image: tiktokImage, isActive: false },
];

const FormPage = () => {
  const {
    register,
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const { languages, countries, platforms } = useAppSelector(
    (state) => state.ad
  );
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [firstImageLink, setFirstImageLink] = useState('');
  const [secondImageLink, setSecondImageLink] = useState('');
  const [thirdImageLink, setThirdImageLink] = useState('');

  const [requireImage, setRequireImage] = useState<boolean>(false);

  const firstImageInput = useWatch({
    control,
    name: 'firstImage',
  });

  const secondImageInput = useWatch({
    control,
    name: 'secondImage',
  });

  const thirdImageInput = useWatch({
    control,
    name: 'thirdImage',
  });

  const adGoalInput = useWatch({
    control,
    name: 'adGoal',
  });

  // console.log(typeof countries)
  // console.log(typeof platformList)

  console.log(errors);

  useEffect(() => {
    const requireImage = !(
      platforms.length === 1 &&
      platforms[0] === 'google' &&
      adGoalInput?.value === 'App promotion'
    );
    setRequireImage(requireImage);
  }, [adGoalInput, platforms]);

  const handleSubmitButton = async (data: any) => {
    const form = new FormData();

    let locationList = [];
    for (let obj of data.location) {
      locationList.push(obj.label);
    }

    let languageList = [];
    for (let obj of data.language) {
      languageList.push(obj.label);
    }

    form.append('platforms', platforms.toString());
    form.append('goal', data.adGoal.value);
    form.append('location', data.location.value);
    form.append('language', data.language.value);
    form.append('headline', data.adTitle);
    form.append('description', data.adDescription);
    form.append('url', data.adUrl);
    form.append('photo_1', data.firstImage[0]);
    form.append('photo_2', data.secondImage[0]);
    form.append('photo_3', data.thirdImage[0]);

    // const adInfo = {
    //   platforms: platforms,
    //   goal: data.adGoal.value,
    //   location: data.location.value,
    //   language: data.language.value,
    //   headline: data.adTitle,
    //   description: data.adDescription,
    //   url: data.adUrl,
    //   photo_1: firstImageLink,
    //   photo_2: secondImageLink,
    //   photo_3: thirdImageLink,
    // }

    // console.log(platforms)
    // console.log(data.adGoal.value)
    // console.log(data.location)
    // console.log(data.language)
    // console.log(data.adTitle)
    // console.log(data.adDescription)
    // console.log(data.adUrl)
    // console.log(firstImageLink)

    setLoading(true);
    await axios
      .post('http://3.121.51.155:5000/api/generate', form)
      .then((data) => {
        let responseData = data.data.result;
        dispatch(setAdInfo(responseData));
      })
      .then(() => navigate('/ad'))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    if (firstImageInput) {
      // console.log(firstImageInput[0]);
      // const blob = new Blob([firstImageInput[0]], {
      //   type: firstImageInput[0]?.type,
      // });
      // console.log(URL.createObjectURL(blob));
      const imageLink = URL.createObjectURL(firstImageInput[0]);
      // console.log(imageLink);
      setFirstImageLink(imageLink);
    }
  }, [firstImageInput]);

  useEffect(() => {
    if (secondImageInput) {
      const imageLink = URL.createObjectURL(secondImageInput[0]);
      setSecondImageLink(imageLink);
    }
  }, [secondImageInput]);

  useEffect(() => {
    if (thirdImageInput) {
      const imageLink = URL.createObjectURL(thirdImageInput[0]);
      setThirdImageLink(imageLink);
    }
  }, [thirdImageInput]);

  const [file, setFile] = useState<File>();

  const handleFileChange = (e: any) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
    //@ts-ignore
    // console.log(URL.createObjectURL(file));
  };

  // console.log(file);

  const handlePlatformButton = (data: object) => {
    // console.log(data);

    const chosenPlatforms = [];
    for (let value of Object.entries(data)) {
      if (value[1] === true) {
        chosenPlatforms.push(value[0]);
      }
    }

    // console.log(chosenPlatforms);

    axios
      .post('http://3.121.51.155:5000/api/language_location', chosenPlatforms)
      .then((data) => console.log(data.data))
      .catch((e) => console.log(e));

    // if (platforms.length === 0) {
    //   setError('Choose at least one social media');
    // } else {
    //   setPlatforms([]);

    //   const newArray = platforms.map((item) => item.name);
    //   const serverData = { platforms: newArray };

    //const objj = {'facebook': 'True', 'instagram': 'False', 'google': 'True', 'tiktok': 'True'}

    // axios
    //   .post('http://3.121.51.155:5000/api/location', serverData)
    //   .then((data) => console.log(data.data));

    // axios
    //   .get('http://3.121.51.155:5000/api/pn_codes')
    //   .then((data) => console.log(data));

    // navigate('/form');
  };

  return (
    <div className={classes.formPage}>
      {loading && (
        <Loader
          children={
            <>
              <p className={classes.loaderText}>AI needs time too!</p>
              <p className={classes.loaderText}>Please wait up to 2 minutes.</p>
            </>
          }
        />
      )}
      <div className={classes.container}>
        <h2 className={classes.formTitle}>Let's start</h2>
        <div className={classes.formInner}>
          <form
            onSubmit={handleSubmit(handleSubmitButton)}
            className={classes.form}
          >
            <CustomSelect
              control={control}
              label="Advertising goal"
              rules={{ required: 'Ad goal is required' }}
              options={adGoals}
              name="adGoal"
              error={errors?.adGoal?.message as any}
            />

            <div className={classes.selectBlock}>
              <div className={classes.select}>
                <CustomSelect
                  control={control}
                  label="Location"
                  options={countries[0]}
                  name="location"
                  error={errors?.location?.message as any}
                  rules={{ required: 'Location is required' }}
                  isMulti
                />
              </div>

              <div className={classes.select}>
                <CustomSelect
                  control={control}
                  label="Language"
                  options={languages[0]}
                  name="language"
                  error={errors?.language?.message as any}
                  rules={{ required: 'Language is required' }}
                  isMulti
                />
              </div>
            </div>

            <Input
              {...register('adTitle', {
                required: 'Headline is required',
              })}
              title="Headline"
              placeholder="AirPods Pro (2nd generation)"
              error={errors?.adTitle?.message as any}
            />
            <Input
              {...register('adDescription', {
                required: 'Description is required',
              })}
              title="Description"
              placeholder="Up to 2x more Active Noise Cancellation than the previous generation…"
              error={errors?.adDescription?.message as any}
            />
            <Input
              {...register('adUrl', { required: 'Url is required' })}
              title="URL"
              placeholder="apple.com/airpods-pro"
              error={errors?.adDescription?.message as any}
            />

            {requireImage && (
              <div className={classes.imageInner}>
                <h4 className={classes.imageTitle}>Images</h4>
                <div className={classes.imageContainer}>
                  <div>
                    <ImagePicker
                      {...register('firstImage', {
                        required: 'Image is required',
                      })}
                      name="firstImage"
                      image={firstImageLink}
                    />
                    <div className={classes.imageErrorBlock}>
                      <p className={classes.imageError}>
                        {errors?.firstImage?.message as any}
                      </p>
                    </div>
                  </div>

                  <div>
                    <ImagePicker
                      {...register('secondImage', {
                        required: 'Image is required',
                      })}
                      name="secondImage"
                      image={secondImageLink}
                    />
                    <div className={classes.imageErrorBlock}>
                      <p className={classes.imageError}>
                        {errors?.secondImage?.message as any}
                      </p>
                    </div>
                  </div>

                  <div>
                    <ImagePicker
                      {...register('thirdImage', {
                        required: 'Image is required',
                      })}
                      name="thirdImage"
                      image={thirdImageLink}
                    />
                    <div className={classes.imageErrorBlock}>
                      <p className={classes.imageError}>
                        {errors?.thirdImage?.message as any}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <Button
              title="Generate ad"
              style={{
                'background-color': '#33d684',
                'font-weight': 700,
              }}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormPage;
