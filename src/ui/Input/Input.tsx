import React, { FC, forwardRef } from 'react';
import InputMask from 'react-input-mask';
import MaskedInput from 'react-input-mask'
import classes from './Input.module.css';

interface IFormInputProps {
  inputStyles?: object;
  placeholder?: string;
  type?: string;
  value?: string;
  title?: string;
  error?: string | null;
  ref?: any;
  mask?: string;
  onChange?: any;
  onBlur?: any;
}

const Input: FC<IFormInputProps> = forwardRef(
  (
    {
      inputStyles,
      mask,
      placeholder,
      type,
      value,
      title,
      error,
      ...inputProps
    },
    ref
  ) => {
    // if (mask) {
    //   <div className={classes.inputContainer}>
    //     {title && <h5 className={classes.inputTitle}>{title}</h5>}
    //     <MaskedInput
    //       mask="99 999 999 "
    //       placeholder={placeholder}
    //       type={type}
    //       style={
    //         error
    //           ? { ...inputStyles, ...{ borderColor: '#e71e1e' } }
    //           : inputStyles
    //       }
    //       className={classes.input}
    //     />
    //   </div>;
    // }

    return (
      <div className={classes.inputContainer}>
        {title && <h5 className={classes.inputTitle}>{title}</h5>}
        <input
          ref={ref}
          type={type}
          placeholder={placeholder}
          {...inputProps}
          className={classes.input}
          style={
            error
              ? { ...inputStyles, ...{ borderColor: '#e71e1e' } }
              : inputStyles
          }
        ></input>
        <div className={classes.errorContainer}>
          {error && <p className={classes.inputError}>{error}</p>}
        </div>
      </div>
    );
  }
);

export default Input;
