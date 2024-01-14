import React, { FC, forwardRef } from 'react';
import classes from './InputNew.module.css';
import InputMask from 'react-input-mask';

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
  disabled?: boolean;
  width?: any;
}

const InputNew: FC<IFormInputProps> = forwardRef(
  (
    {
      inputStyles,
      mask,
      placeholder,
      type,
      value,
      title,
      error,
      width,
      ...inputProps
    },
    ref
  ) => {
    const shouldHide = inputProps.disabled;

    const containerStyle = {
      display: shouldHide ? 'none' : 'block',
      width: width,
    };

    const inputStyle = {
      ...(error ? { borderColor: '#e71e1e' } : {}),
      ...inputStyles,
    };

    return (
      <div className={classes.inputContainer} style={containerStyle}>
        {title && <h5 className={classes.inputTitle}>{title}</h5>}
        {mask ? (
          <InputMask
            ref={ref}
            type={type}
            placeholder={placeholder}
            {...inputProps}
            className={classes.input}
            style={inputStyle}
            disabled={shouldHide}
            //@ts-ignore
            mask={mask}
          />
        ) : (
          <input
            ref={ref}
            type={type}
            placeholder={placeholder}
            {...inputProps}
            className={classes.input}
            style={inputStyle}
            disabled={shouldHide}
          />
        )}
        <div className={classes.errorContainer}>
          {error && <p className={classes.inputError}>{error}</p>}
        </div>
      </div>
    );
  }
);

export default InputNew;
