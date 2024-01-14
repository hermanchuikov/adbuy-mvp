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
  NestedDropdown,
  Modal,
} from '../../ui';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAppSelector } from '../../hooks/useAppSelector';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { tiktokLocations } from '../../assets/constants/tiktokLocations';
import { otherPlatformLocation } from '../../assets/constants/otherPlatformLocations';
import { tiktokDict } from '../../assets/constants/tiktokDict';
import { otherPlatformDict } from '../../assets/constants/otherPlatformDict';
import { setAdInfo, setAdPreferences } from '../../store/slices/adSlice';
import { useMediaQuery } from 'react-responsive';
import $api from '../../api/api';
import { locations } from '../../assets/constants/locations';
import { checkBoxGroup } from '../../assets/constants/checkBoxGroup';
import googleImage from '../../assets/images/platform-1.svg';
import facebookImage from '../../assets/images/platform-2.svg';
import instagramImage from '../../assets/images/platform-3.svg';
import tiktokImage from '../../assets/images/platform-4.svg';
import classes from './Form.module.css';

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
    label: 'Leads - Encourage customers to take action',
  },
  {
    value: 'App promotion',
    label: 'App promotion - Get new users to install your app',
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
    clearErrors,
    formState: { errors },
  } = useForm();

  const isMobile = useMediaQuery({
    query: '(max-width: 440px)',
  });

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

  const [isErrorModal, setErrorModal] = useState(false);
  const [isUpdateImages, setUpdateImages] = useState(false);

  let firstImageInput = useWatch({
    control,
    name: 'firstImage',
  });

  let secondImageInput = useWatch({
    control,
    name: 'secondImage',
  });

  let thirdImageInput = useWatch({
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

  // console.log(typeof countries)
  // console.log(typeof platformList)

  useEffect(() => {
    const requireImage = !(
      platforms.length === 1 &&
      platforms[0] === 'google' &&
      adGoalInput?.value === 'App promotion'
    );
    setRequireImage(requireImage);
  }, [adGoalInput, platforms]);

  const transformData = (data: any, valuesDict: object) => {
    const transformed = {};

    Object.entries(data).forEach(([key, value]) => {
      //@ts-ignore
      const transformedKey = valuesDict[key] || key;

      const transformedValue = Array.isArray(value)
        ? //@ts-ignore
          value.map((child) => valuesDict[child] || child)
        : value;
      //@ts-ignore
      transformed[transformedKey] = transformedValue;
    });

    return transformed;
  };

  const handleSubmitButton = async (data: any) => {
    console.log(data);

    setLoading(true);

    // let locationList = [];
    // for (let obj of data.location) {
    //   locationList.push(obj.label);
    // }

    if (isCustomMode) {
      data.firstImage = [null];
      data.secondImage = [null];
      data.thirdImage = [null];
    }

    const result = {};

    console.log(data.location)

    const my_function = (key: any, new_key:any = undefined):any => {
      let [parentKey, childKey] = key.split('-');
      if (new_key){
        parentKey = key
        childKey = new_key
      }
      //@ts-ignore
      if (!result[parentKey]) {
        //@ts-ignore
        result[parentKey] = [];
      }
      if (childKey != undefined && !new_key) {
        //@ts-ignore
        if (!result[parentKey].includes(parentKey + '-' + childKey)){
          // @ts-ignore
          result[parentKey].push(parentKey + '-' + childKey);
        }
      }
      if (new_key){
        // @ts-ignore
        if (!result[parentKey].includes(new_key)){
          // @ts-ignore
          result[parentKey].push(new_key);
        }
      }
      if (key?.split('-')?.length >= 3){
        return my_function(key.split('-')[0], key)
      }
    }

    Object.entries(data.location).forEach(([key, value]) => {
      // const [parentKey, childKey] = key.split('-');
      // //@ts-ignore
      // if (!result[parentKey]) {
      //   //@ts-ignore
      //   result[parentKey] = [];
      // }
      // if (childKey != undefined) {
      //   //@ts-ignore
      //   result[parentKey].push(parentKey + '-' + childKey);
      // }

      return my_function(key)
    });

    console.log(result)
    let valueDict;
    if (platforms.includes('tiktok')) {
      valueDict = tiktokDict;
    } else {
      valueDict = otherPlatformDict;
    }

    let locationArray = transformData(result, valueDict);
    const locationString = JSON.stringify(locationArray);

    const form = new FormData();

    form.append('platforms', platforms.toString());
    form.append('goal', data.adGoal.value);
    form.append('location', locationString);
    form.append('headline', data.adTitle);
    form.append('url', data.adUrl);

    const adPreferences = {
      name: data.adTitle,
      adWebsite: data.adUrl,
      adGoal: data.adGoal.value,
      chosenCountries: locationString,
    };

    await $api
      .post('generate', form)
      .then((data) => {
        let responseData = data.data;
        console.log(responseData);
        dispatch(setAdInfo(responseData));
        dispatch(setAdPreferences(adPreferences));
      })
      .then(() => navigate('/ad'))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  };

  const getFileExtension = (filename: string) => {
    const extension = filename.split('.');

    if (extension.length > 1) {
      return extension[extension.length - 1];
    }

    return '';
  };

  useEffect(() => {
    if (firstImageInput) {
      const fileExtension = getFileExtension(firstImageInput[0]?.name);
      if (fileExtension.toLocaleLowerCase() === 'heic') {
        setErrorModal((errorStatus) => !errorStatus);
        setValue('firstImage', null);
      } else {
        const imageLink = URL.createObjectURL(firstImageInput[0]);
        setFirstImageLink(imageLink);
      }
    }
  }, [firstImageInput]);

  useEffect(() => {
    if (secondImageInput) {
      const fileExtension = getFileExtension(secondImageInput[0]?.name);
      if (fileExtension.toLocaleLowerCase() === 'heic') {
        setErrorModal((errorStatus) => !errorStatus);
        setValue('secondImage', null);
      } else {
        const imageLink = URL.createObjectURL(secondImageInput[0]);
        setSecondImageLink(imageLink);
      }
    }
  }, [secondImageInput]);

  useEffect(() => {
    if (thirdImageInput) {
      const fileExtension = getFileExtension(thirdImageInput[0]?.name);
      if (fileExtension.toLocaleLowerCase() === 'heic') {
        setErrorModal(true);
        setValue('thirdImage', null);
      } else {
        const imageLink = URL.createObjectURL(thirdImageInput[0]);
        setThirdImageLink(imageLink);
      }
    }
  }, [thirdImageInput]);

  useEffect(() => {
    if (!countrySelect) {
      return;
    }
    for (let i = 0; i < countrySelect.length; i++) {
      if (countrySelect[i].label === 'United States') {
        console.log('ok');
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

  const location = useLocation();
  const isCustomMode =
    new URLSearchParams(location.search).get('mode') === 'simplified';
  console.log(isCustomMode);

  useEffect(() => {
    if (isCustomMode) {
      clearErrors([
        'adTitle',
        'adDescription',
        'firstImage',
        'secondImage',
        'thirdImage',
      ]);
    }
  }, [isCustomMode]);

  useEffect(() => {
    if (isCustomMode) {
      setValue('adTitle', 'None');
      setValue('adDescription', 'None');
    }
  }, [isCustomMode, setValue]);

  return (
    <div className={classes.formPage}>
      {
        <Modal isOpen={isErrorModal}>
          <h6 className={classes.modalTitle}>Error</h6>
          <p className={classes.modalText}>
            You can only upload file in .jpg, .jpeg, .png or .webp format.
          </p>
          <Button
            style={{
              height: '60px',
              'background-color': '#33d684',
              'font-size': '24px',
              padding: 0,
              marginTop: '24px',
            }}
            onButtonClick={() => setErrorModal(false)}
            title="OK"
          />
        </Modal>
      }
      {loading && (
        <Loader
          children={
            <>
              <p className={classes.loaderText}><b>AI</b> generates ad creatives.</p>
              <p className={classes.loaderText}>
                Please wait about <b>30 seconds</b>.
              </p>
            </>
          }
        />
      )}
      <div className={classes.container}>
        <h2 className={classes.gradientTitle}>Ad Generation · Step 2/3</h2>
        <div className={classes.formInner}>
          <form
            onSubmit={handleSubmit(handleSubmitButton)}
            className={classes.form}
          >
            <div className={classes.firstBlock}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  columnGap: 24,
                }}
              >
                <CustomSelect
                  control={control}
                  label="Advertising Goal"
                  rules={{ required: 'Advertising Goal is required' }}
                  options={adGoals}
                  name="adGoal"
                  error={errors?.adGoal?.message as any}
                  style={{ width: !isMobile ? '48%' : '100%' }} // You can adjust marginRight as per your needs
                />

                <NestedDropdown
                  control={control}
                  label="Location"
                  name="location"
                  data={
                    platforms.includes('tiktok')
                      ? tiktokLocations
                      : otherPlatformLocation
                  }
                  style={{ width: '50%' }}
                />

                <div className={classes.imageExtraText}>
                  <b>AI</b> will find the most receptive audience in the
                  selected Location based on your Goal.
                </div>
              </div>

              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  rowGap: 21,
                  paddingTop: 42,
                  width: '100%',
                }}
              >
                <Input
                  {...register('adTitle', {
                    required: 'Name is required',
                  })}
                  title="What do you want to advertise?"
                  placeholder="Pistachios"
                  error={errors?.adTitle?.message as any}
                  isTextArea
                  disabled={isCustomMode}
                  inputStyles={
                    isMobile
                      ? { width: '100%' }
                      : { height: '50px', width: '100%' }
                  }
                />

                <Input
                  {...register('adUrl', {
                    required: 'Website URL is required',
                  })}
                  title="Website URL"
                  placeholder="https://nuts.com/pistachios/"
                  inputStyles={
                    isMobile
                      ? { width: '100%' }
                      : { height: '50px', width: '100%' }
                  }
                  error={errors?.adUrl?.message as any}
                />
              </div>
            </div>

            <Button
              title="Generate ad"
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
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormPage;
