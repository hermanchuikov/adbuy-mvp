import React, { FC, useEffect, useMemo, useState } from 'react';
import { Controller, useForm, useWatch } from 'react-hook-form';
import { Input, Button, CustomSelect } from '../../ui';
import { useFetch } from '../../hooks/useFetch';
import adService from '../../services/adService';
import InputMask from 'react-input-mask';
import { validateEmailRegex } from './utils/validateEmailRegex';
import { useAppSelector } from '../../hooks/useAppSelector';
// import DatePicker from 'react-datepicker';
import { DatePicker } from '@mui/x-date-pickers';
import 'react-datepicker/dist/react-datepicker.css';
import $api from '../../api/api';
import Select from 'react-select';
import classes from './Payment.module.css';
import { phoneNumbers } from './constants/phoneNumbers';

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
  const { platforms } = useAppSelector((state) => state.ad);
  const [minDate, setMinDate] = useState(new Date());
  const [minimumBudget, setMinimumBudget] = useState('0');
  const [paymentLink, setPaymentLink] = useState('');

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

  console.log('rerender');

  useEffect(() => {
    const minimumDayBudget = 20;
    console.log('calculating...');
    if (startDateInput != null && endDateInput != null) {
      let startDate = new Date(startDateInput);
      let endDate = new Date(endDateInput);

      console.log(`Start date: ${startDate}`);
      console.log(`End date: ${endDate}`);

      const dayPeriod =
        Math.ceil(
          Math.abs(endDate.getTime() - startDate.getTime()) / (1000 * 3600 * 24)
        ) + 1;

      console.log(dayPeriod);

      console.log(`Platforms length: ${platforms.length}`);

      const minimumBudget = minimumDayBudget * platforms.length * dayPeriod;

      console.log(minimumBudget.toString());
      setMinimumBudget(minimumBudget.toString());
    } else {
      console.log(minimumBudget.toString());
      setMinimumBudget((platforms.length * minimumDayBudget).toString());
    }
  }, [platforms, startDateInput, endDateInput]);

  useEffect(() => {
    setMinDate(startDateInput);
  }, [startDateInput]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const getServiceeFee = (budget: number) => {
    if (budget < 1200) {
      return 179;
    }

    if (budget < 2400) {
      return 279;
    }

    return 359;
  };

  const handleSubmitButton = async (data: any) => {
    const budget = parseInt(data.budget);
    const serviceFee = getServiceeFee(budget);
    const serverData = { customer: data.email, amount: serviceFee };

    await $api
      .post('checkout', serverData)
      .then((data) => window.location.replace(data.data))
      .catch((error) => console.log(error));
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

  return (
    <div className={classes.payment}>
      <div className={classes.container}>
        <div className={classes.paymentBlock}>
          <h2 className={classes.paymentTitle}>A little bit more!</h2>
          <form
            onSubmit={handleSubmit(handleSubmitButton)}
            className={classes.paymentForm}
          >
            <div className={classes.block}>
              <h4 className={classes.phoneNumberTitle}>
                Business phone number
              </h4>
              <div className={classes.blockInner}>
                <div className={classes.selectBlock}>
                  <CustomSelect
                    name="phoneSelect"
                    control={control}
                    error={errors?.phoneSelect?.message as any}
                    options={phoneNumbers}
                  />
                </div>

                <div className={classes.inputBlock}>
                  <Controller
                    name="phoneNumber"
                    control={control}
                    render={({ field }) => (
                      <InputMask
                        mask="+99 (999) 999 99 99"
                        value={field.value}
                        onChange={field.onChange}
                        className={classes.maskInput}
                      ></InputMask>
                    )}
                  />
                  {/* <Input
                    {...register('phoneNumber', {
                      required: 'This is a required field',
                    })}
                    inputStyles={{ width: '100%', height: '50px' }}
                    error={errors?.phoneNumber?.message as any}
                  /> */}
                </div>
              </div>
            </div>
            <Input
              {...register('email', {
                required: 'This is a required field',
                pattern: {
                  value: validateEmailRegex,
                  message: 'Email is not valid',
                },
              })}
              title="Email"
              error={errors?.email?.message as any}
            />

            <div>
              <div className={classes.dateInner}>
                <div className={classes.dateBlock}>
                  <h4 className={classes.dateTitle}>Start date</h4>
                  <Controller
                    name="startDate"
                    control={control}
                    rules={{ required: 'Start date is required' }}
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
            </div>

            <Input
              {...register('budget', {
                required: 'This is a required field',
                min: {
                  value: minimumBudget,
                  message: `Minimum budget should be much than ${minimumBudget}`,
                },
              })}
              title="Daily budget (USD)"
              error={errors?.budget?.message as any}
              type="number"
              placeholder={`Minimum budget: ${minimumBudget}`}
            />
            <Button
              title="Pay and Run"
              style={{
                'background-color': '#33d684',
              }}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
