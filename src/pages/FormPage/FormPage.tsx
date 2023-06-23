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
  NestedSelect,
} from '../../ui';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks/useAppSelector';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { setAdInfo } from '../../store/slices/adSlice';
import $api from '../../api/api';
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

const groupedOptions = [
  {
    label: 'United States',
    options: [
      { label: 'Alabama', value: 'Alabama' },
      { label: 'Alaska', value: 'Alaska' },
      { label: 'Arizona', value: 'Arizona' },
      { label: 'Arkansas', value: 'Arkansas' },
      { label: 'California', value: 'California' },
      { label: 'Colorado', value: 'Colorado' },
      { label: 'Connecticut', value: 'Connecticut' },
      { label: 'Delaware', value: 'Delaware' },
      { label: 'Florida', value: 'Florida' },
      { label: 'Georgia', value: 'Georgia' },
      { label: 'Hawaii', value: 'Hawaii' },
      { label: 'Idaho', value: 'Idaho' },
      { label: 'Illinois', value: 'Illinois' },
      { label: 'Indiana', value: 'Indiana' },
      { label: 'Iowa', value: 'Iowa' },
      { label: 'Kansas', value: 'Kansas' },
      { label: 'Kentucky', value: 'Kentucky' },
      { label: 'Louisiana', value: 'Louisiana' },
      { label: 'Maine', value: 'Maine' },
      { label: 'Maryland', value: 'Maryland' },
      { label: 'Massachusetts', value: 'Massachusetts' },
      { label: 'Michigan', value: 'Michigan' },
      { label: 'Minnesota', value: 'Minnesota' },
      { label: 'Mississippi', value: 'Mississippi' },
      { label: 'Missouri', value: 'Missouri' },
      { label: 'Montana', value: 'Montana' },
      { label: 'Nebraska', value: 'Nebraska' },
      { label: 'Nevada', value: 'Nevada' },
      { label: 'New Hampshire', value: 'New Hampshire' },
      { label: 'New Jersey', value: 'New Jersey' },
      { label: 'New Mexico', value: 'New Mexico' },
      { label: 'New York', value: 'New York' },
      { label: 'North Carolina', value: 'North Carolina' },
      { label: 'North Dakota', value: 'North Dakota' },
      { label: 'Ohio', value: 'Ohio' },
      { label: 'Oklahoma', value: 'Oklahoma' },
      { label: 'Oregon', value: 'Oregon' },
      { label: 'Pennsylvania', value: 'Pennsylvania' },
      { label: 'Rhode Island', value: 'Rhode Island' },
      { label: 'South Carolina', value: 'South Carolina' },
      { label: 'South Dakota', value: 'South Dakota' },
      { label: 'Tennessee', value: 'Tennessee' },
      { label: 'Texas', value: 'Texas' },
      { label: 'Utah', value: 'Utah' },
      { label: 'Vermont', value: 'Vermont' },
      { label: 'Virginia', value: 'Virginia' },
      { label: 'Washington', value: 'Washington' },
      { label: 'West Virginia', value: 'West Virginia' },
      { label: 'Wisconsin', value: 'Wisconsin' },
      { label: 'Wyoming', value: 'Wyoming' },
    ],
  },
];

const adGoals = [
  {
    value: 'Website Traffic',
    label: 'Website Traffic - Get the people to visit your website',
  },
  {
    value: 'Leads',
    label: 'Leads - Get leads by encouraging customers to take action',
  },
  {
    value: 'App promotion',
    label: 'App promotion - Get new users to install your app',
  },
  {
    value: 'Sales',
    label: 'Sales - Drive sales online, in app, by phone or in store',
  },
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
    getValues,
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

  const [groupedCities, setGroupedCities] = useState([]);

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

  const countrySelect = useWatch({
    control,
    name: 'location',
  });

  console.log(countrySelect);

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

    // let languageList = [];
    // for (let obj of data.language) {
    //   languageList.push(obj.label);
    // }

    form.append('platforms', platforms.toString());
    form.append('goal', data.adGoal.value);
    form.append('location', locationList.toString());
    form.append('language', data.language.label);
    form.append('headline', data.adTitle);
    form.append('description', data.adDescription);
    form.append('url', data.adUrl);
    form.append('photo_1', data.firstImage[0]);
    form.append('photo_2', data.secondImage[0]);
    form.append('photo_3', data.thirdImage[0]);

    console.log(form);

    setLoading(true);
    await $api
      .post('generate', form)
      .then((data) => {
        let responseData = data.data.result;
        console.log(responseData);
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

  useEffect(() => {
    if (!countrySelect) {
      return ;
    }
    for (let i = 0; i < countrySelect.length; i++) {
      if (countrySelect[i].label === "United States") {
        console.log('ok')
        //@ts-ignore
        setGroupedCities(groupedOptions);
        console.log(groupedOptions);
      }
    }
  }, [countrySelect]);

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

    $api
      .post('language_location', chosenPlatforms)
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
                  label="Cities/States"
                  isDisabled={!countrySelect}
                  options={groupedCities}
                  name="city"
                  error={errors?.language?.message as any}
                  rules={{ required: 'City/state is required' }}
                  isMulti
                />
              </div>
            </div>

            <CustomSelect
              control={control}
              label="Language"
              options={languages[0]}
              name="language"
              error={errors?.language?.message as any}
              rules={{ required: 'Language is required' }}
              isMulti={false}
            />

            {/* <NestedSelect
              register={register}
              setValue={setValue}
              getValues={getValues}
            /> */}

            <Input
              {...register('adTitle', {
                required: 'Headline is required',
              })}
              title="Product/Service Title"
              placeholder="AirPods Pro (2nd generation)"
              error={errors?.adTitle?.message as any}
            />
            <Input
              {...register('adDescription', {
                required: 'Description is required',
              })}
              title="Product/Service Description"
              placeholder="Up to 2x more Active Noise Cancellation than the previous generation…"
              error={errors?.adDescription?.message as any}
            />
            <Input
              {...register('adUrl', { required: 'Url is required' })}
              title="Website Address"
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
