import React, { FC } from 'react';
import classes from './CustomSelect.module.css';
import Select from 'react-select';
import { Controller } from 'react-hook-form';
import { useMediaQuery } from 'react-responsive';

interface ISelectProps {
  name: string;
  label?: string;
  control: any;
  options: object[];
  isMulti?: boolean;
  error: string | undefined | null;
  rules?: object;
  style?: object;
}

const CustomSelect: FC<ISelectProps> = ({
  label,
  name,
  control,
  options,
  isMulti = false,
  error,
  rules,
  style,
}) => {
  // return (
  //   <>
  //     <label className={classes.title}>{title}</label>
  //     <select className={classes.select} onChange={(e) => onChange(e)}>
  //       {values.map((value) => {
  //         return (
  //           <option className={classes.option} key={value} value={value}>
  //             {value}
  //           </option>
  //         );
  //       })}
  //     </select>
  //   </>
  // );

  const isMobile = useMediaQuery({
    query: '(max-width: 440px)',
  });

  return (
    <div className={classes.select} style={style}>
      {label && <h4 className={classes.selectTitle}>{label}</h4>}
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field }) => (
          <Select
            styles={isMobile ? {control: (baseStyles, state) => ({
              ...baseStyles,
              height: '40px',
              borderRadius: '7px'
            })} : {
              control: (baseStyles, state) => ({
                ...baseStyles,
                // minHeight: '50px',
                height: '50px',
                borderRadius: '18px'
              }),
            }}
            options={options}
            isMulti={isMulti}
            onChange={field.onChange}
            onBlur={field.onBlur}
          />
        )}
      />
      <div className={classes.errorContainer}>
        {error && <p className={classes.inputError}>{error}</p>}
      </div>
    </div>
  );
};

export default CustomSelect;
