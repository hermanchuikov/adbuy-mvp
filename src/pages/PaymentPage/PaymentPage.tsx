import React, { FC, useEffect, useMemo, useState } from 'react';
import { Controller, useForm, useWatch } from 'react-hook-form';
import { Input, Button, CustomSelect, Loader } from '../../ui';

import { useAppSelector } from '../../hooks/useAppSelector';
import Stripe from '../../assets/images/with_stripe_new.png';
import { DatePicker } from '@mui/x-date-pickers';
import { useMediaQuery } from 'react-responsive';
import 'react-datepicker/dist/react-datepicker.css';
import googleImage from '../../assets/images/platform-1.png';
import facebookImage from '../../assets/images/platform-2.png';
import instagramImage from '../../assets/images/platform-3.png';
import tiktokImage from '../../assets/images/platform-4.png';
import $api from '../../api/api';
import Select from 'react-select';
import classes from './Payment.module.css';
import { phoneNumbers } from './constants/phoneNumbers';
import stripeImage from '../../assets/images/stripe_white.svg';
import { validateEmailRegex } from './utils/validateEmailRegex';

const locationOptions = [
  { value: '+38', label: 'Ukraine(+38)' },
  { value: '+1', label: 'USA(+1)' },
  { value: '+25', label: 'France(+25)' },
  { value: '+21', label: 'Belgium(+21)' },
  { value: '+17', label: 'Germany(+17)' },
];

const PaymentPage: FC = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    setValue,
  } = useForm();

  // const { fetchData, loading, error } = useFetch(adService.getPaymentLink);
  const { platforms, gen_id } = useAppSelector((state) => state.ad);
  const [minDate, setMinDate] = useState(new Date());
  const [minimumBudget, setMinimumBudget] = useState('0');
  const [paymentLink, setPaymentLink] = useState('');

  const [loading, setLoading] = useState(false);

  const isMobile = useMediaQuery({
    query: '(max-width: 440px)',
  });

  const [serviceFee, setServiceFee] = useState<number | null>(0);
  const [totalBudget, setTotalBudget] = useState<number | null>(0);
  const [newServiceFee, setNewServiceFee] = useState<number | null>(0);
  const [newServiceFeePercentage, setNewServiceFeePercentage] = useState<
    number | null
  >(0);

  const [adTotalBudget, setAdTotalBudget] = useState<number | null>(0);

  const phoneNumberSelect = useWatch({
    control,
    name: 'phoneSelect',
  });

  const startDateInput = useWatch({
    control,
    name: 'startDate',
  });

  const endDateInput = useWatch({
    control,
    name: 'endDate',
  });

  const googleBudget = useWatch({
    control,
    name: 'googleBudget',
  });

  const facebookBudget = useWatch({
    control,
    name: 'facebookBudget',
  });

  const instagramBudget = useWatch({
    control,
    name: 'instagramBudget',
  });

  const tiktokBudget = useWatch({
    control,
    name: 'tiktokBudget',
  });

  console.log('rerender');

  useEffect(() => {
    const minimumDayBudget = 20;
    if (startDateInput != null && endDateInput != null) {
      let startDate = new Date(startDateInput);
      let endDate = new Date(endDateInput);

      const dayPeriod =
        Math.ceil(
          Math.abs(endDate.getTime() - startDate.getTime()) / (1000 * 3600 * 24)
        ) + 1;

      console.log(dayPeriod);

      const googleAdBudget = googleBudget ? +googleBudget * +dayPeriod : 0;
      const facebookAdBudget = facebookBudget
        ? +facebookBudget * +dayPeriod
        : 0;
      const instagramAdBudget = instagramBudget
        ? +instagramBudget * +dayPeriod
        : 0;
      const tiktokAdBudget = tiktokBudget ? +tiktokBudget * +dayPeriod : 0;

      const adBudget =
        googleAdBudget + facebookAdBudget + instagramAdBudget + tiktokAdBudget;

      const serviceFee = getServiceeFee(adBudget);
      const serviceFeePercentage = getServiceeFeePercentage(adBudget);

      setServiceFee(serviceFee);
      setNewServiceFee(serviceFee);

      setNewServiceFeePercentage(serviceFeePercentage);

      setAdTotalBudget(adBudget);

      console.log('Ad budget: ' + adBudget);
      console.log('Service fee: ' + serviceFee);

      const totalAdBudget = +adBudget + +serviceFee;

      setTotalBudget(totalAdBudget);

      // const adBudget = minimumDayBudget * platforms.length * dayPeriod;

      // const minimumBudget = adBudget + serviceFee;

      // console.log(minimumBudget.toString());
      // setMinimumBudget(minimumBudget.toString());
    } else {
      // console.log(minimumBudget.toString());
      // setMinimumBudget((platforms.length * minimumDayBudget).toString());
    }
  }, [
    startDateInput,
    endDateInput,
    googleBudget,
    facebookBudget,
    instagramBudget,
    tiktokBudget,
  ]);

  useEffect(() => {
    setMinDate(startDateInput);
  }, [startDateInput]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  console.log(platforms);

  const getServiceeFee = (budget: number) => {
    let fee;

    if (budget <= 499) {
      fee = (budget / 100) * 7;
    } else if (budget <= 1499) {
      fee = (budget / 100) * 5;
    } else {
      fee = (budget / 100) * 3;
    }

    return parseFloat(fee.toFixed(2));
  };

  const getServiceeFeePercentage = (budget: number) => {
    if (budget <= 499) {
      return 7;
    }

    if (budget <= 1499) {
      return 5;
    }

    return 3;
  };

  const handleSubmitButton = async (data: any) => {
    setLoading(true);

    const budget = parseInt(data.budget);
    const serviceFee = getServiceeFee(budget);

    const serverData = {
      amount: totalBudget,
      customer: data.email,
      service_fee: newServiceFee,
      platforms: platforms,
      gen_id: gen_id,

      daily_google: data.googleBudget,
      daily_facebook: data.facebookBudget,
      daily_instagram: data.instagramBudget,
      daily_tiktok: data.tiktokBudget,

      start_date: data.startDate,
      end_date: data.endDate,
    };

    const notifyData = {
      email: data.email,
      platforms: platforms,
      gen_id: gen_id,
      start_date: data.startDate,
      end_date: data.endDate,
      budget: totalBudget,
      service_fee: newServiceFee,

      daily_google: data.googleBudget,
      daily_facebook: data.facebookBudget,
      daily_instagram: data.instagramBudget,
      daily_tiktok: data.tiktokBudget,
    };

    await $api
      .post('notify_user', notifyData)
      .catch((error: any) => console.log(error));

    await $api
      .post('checkout', serverData)
      .then((data: any) => window.location.replace(data.data))
      .catch((error: any) => console.log(error));

    setLoading(false);
  };

  useEffect(() => {
    if (phoneNumberSelect) {
      setValue('phoneNumber', phoneNumberSelect?.value);
    }
  }, [phoneNumberSelect]);

  // console.log(errors);
  // console.log(phoneNumberSelect);

  // if (loading) {
  //   return (
  //     <div>
  //       <h3>Loading...</h3>
  //     </div>
  //   );
  // }

  // if (error) {
  //   return (
  //     <div>
  //       <h3>Loading...</h3>
  //     </div>
  //   );
  // }

  if (loading) {
    return (
      <Loader
        children={
          <>
            <p className={classes.loaderText}>Redirecting to Stripe... 🚀</p>
          </>
        }
      />
    );
  }

  return (
    <div className={classes.payment}>
      <div className={classes.container}>
        <div className={classes.paymentBlock}>
          <h2 className={classes.gradientTitle}>Ad Launch · Step 3/3</h2>
          <form
            onSubmit={handleSubmit(handleSubmitButton)}
            className={classes.paymentForm}
          >
            {/*<div className={classes.zeroBlock}>*/}
            {/*</div>*/}

            <div className={classes.secondBlock}>
              <Input
                {...register('email', {
                  required: 'This is a required field',
                  pattern: {
                    value: validateEmailRegex,
                    message: 'Email is not valid',
                  },
                })}
                inputStyles={isMobile ? { width: '100%' } : { width: '100%' }}
                title="Email"
                placeholder={`johndoe@gmail.com`}
                error={errors?.email?.message as any}
              />

              <div className={classes.dateInner}>
                <div className={classes.dateBlock}>
                  <h4 className={classes.dateTitle}>Launch date</h4>
                  <Controller
                    name="startDate"
                    control={control}
                    rules={{ required: 'Launch date is required' }}
                    render={({ field }) => (
                      <DatePicker
                        onChange={field.onChange}
                        minDate={new Date()}
                        format="dd/MM/yyyy"
                        className={classes.datePicker}
                      />
                    )}
                  />
                </div>

                <div className={classes.dateBlock}>
                  <h4 className={classes.dateTitle}>End date</h4>
                  <Controller
                    name="endDate"
                    control={control}
                    rules={{ required: 'End date is required' }}
                    render={({ field }) => (
                      <DatePicker
                        onChange={field.onChange}
                        minDate={minDate}
                        disabled={startDateInput == null}
                        format="dd/MM/yyyy"
                        className={classes.datePicker}
                      />
                    )}
                  />
                </div>
              </div>

              <div className={classes.errorBlock}>
                {(errors?.startDate?.message as any) ||
                errors?.endDate?.message ? (
                  <p className={classes.dateError}>Date is required field</p>
                ) : null}
              </div>

              <h3 className={classes.budgetTitle}>Budget</h3>
              <p className={classes.budgetSubtitle}>
                How much do you want to invest?
              </p>
              <div
                style={
                  isMobile
                    ? {
                        display: 'flex',
                        flexDirection: 'column',
                        rowGap: 24,
                        paddingTop: 8,
                      }
                    : {
                        display: 'flex',

                        alignItems: 'center',
                        columnGap: 30,
                        paddingTop: 8,
                      }
                }
              >
                {platforms.includes('google') && (
                  <Input
                    {...register('googleBudget', {
                      min: {
                        value: 1,
                        message: `Minimum budget should be much than ${minimumBudget}`,
                      },
                    })}
                    disabled={!platforms.includes('google')}
                    error={errors?.googleBudget?.message as any}
                    type="number"
                    // placeholder={`Minimum budget: ${minimumBudget}`}
                    inputStyles={{
                      width: '100%',
                      paddingLeft: 85,
                      fontWeight: 'bold',
                    }}
                    children={
                      <>
                        <div className={classes.budgetLogo}>
                          <img
                            src={googleImage}
                            style={{
                              width: isMobile ? 24 : 42,
                              height: isMobile ? 24 : 42,
                              marginRight: 12,
                            }}
                          />
                          <p className={classes.budgetDollarText}>
                            <b>$</b>
                          </p>
                        </div>
                        <div className={classes.budgetPerDayText}>
                          <p>
                            <b>/day</b>
                          </p>
                        </div>
                      </>
                    }
                  />
                )}

                {platforms.includes('facebook') && (
                  <Input
                    {...register('facebookBudget', {
                      min: {
                        value: 1,
                        message: `Minimum budget should be much than ${minimumBudget}`,
                      },
                    })}
                    disabled={!platforms.includes('facebook')}
                    error={errors?.googleBudget?.message as any}
                    type="number"
                    // placeholder={`Minimum budget: ${minimumBudget}`}
                    inputStyles={{
                      width: '100%',
                      paddingLeft: 85,
                      fontWeight: 'bold',
                    }}
                    children={
                      <>
                        <div className={classes.budgetLogo}>
                          <img
                            src={facebookImage}
                            style={{
                              width: isMobile ? 24 : 42,
                              height: isMobile ? 24 : 42,
                              marginRight: 12,
                            }}
                          />
                          <p className={classes.budgetDollarText}>
                            <b>$</b>
                          </p>
                        </div>
                        <div className={classes.budgetPerDayText}>
                          <p>
                            <b>/day</b>
                          </p>
                        </div>
                      </>
                    }
                  />
                )}

                {platforms.includes('instagram') && (
                  <Input
                    {...register('instagramBudget', {
                      min: {
                        value: 1,
                        message: `Minimum budget should be much than ${minimumBudget}`,
                      },
                    })}
                    disabled={!platforms.includes('instagram')}
                    error={errors?.googleBudget?.message as any}
                    type="number"
                    // placeholder={`Minimum budget: ${minimumBudget}`}
                    inputStyles={{
                      width: '100%',
                      paddingLeft: 85,
                      fontWeight: 'bold',
                    }}
                    children={
                      <>
                        <div className={classes.budgetLogo}>
                          <img
                            src={instagramImage}
                            style={{
                              width: isMobile ? 24 : 42,
                              height: isMobile ? 24 : 42,
                              marginRight: 12,
                            }}
                          />
                          <p className={classes.budgetDollarText}>
                            <b>$</b>
                          </p>
                        </div>
                        <div className={classes.budgetPerDayText}>
                          <p>
                            <b>/day</b>
                          </p>
                        </div>
                      </>
                    }
                  />
                )}

                {platforms.includes('tiktok') && (
                  <Input
                    {...register('tiktokBudget', {
                      min: {
                        value: 1,
                        message: `Minimum budget should be much than ${minimumBudget}`,
                      },
                    })}
                    disabled={!platforms.includes('tiktok')}
                    error={errors?.googleBudget?.message as any}
                    type="number"
                    // placeholder={`Minimum budget: ${minimumBudget}`}
                    inputStyles={{
                      width: '100%',
                      paddingLeft: 85,
                      fontWeight: 'bold',
                    }}
                    children={
                      <>
                        <div className={classes.budgetLogo}>
                          <img
                            src={tiktokImage}
                            style={{
                              width: isMobile ? 24 : 42,
                              height: isMobile ? 24 : 42,
                              marginRight: 12,
                            }}
                          />
                          <p className={classes.budgetDollarText}>
                            <b>$</b>
                          </p>
                        </div>
                        <div className={classes.budgetPerDayText}>
                          <p>
                            <b>/day</b>
                          </p>
                        </div>
                      </>
                    }
                  />
                )}
              </div>

              <p style={{ marginTop: 33, fontSize: 21 }}>
                Total budget: ${adTotalBudget}
              </p>

              <p style={{ marginTop: 7, fontSize: 21 }}>
                Fee: ${serviceFee} ({newServiceFeePercentage}%)
              </p>

              <p style={{ marginTop: 15, fontSize: 25 }}>
                <b>To pay: ${totalBudget}</b>
              </p>
            </div>

            <button className={classes.buttonWithImage}>
              <div className={classes.buttonWithImageContainer}>
                <p className={classes.buttonWithImageText}>Pay with</p>
                <img className={classes.buttonWithImageImage} src={Stripe} />
              </div>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
