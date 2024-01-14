import React, { FC, ReactNode, forwardRef } from 'react';
import classes from './Input.module.css';
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
  isTextArea?: boolean;
  shouldHide?: boolean;
  children?: ReactNode;
}

const Input: FC<IFormInputProps> = forwardRef(
  (
    {
      inputStyles,
      isTextArea = false,
      mask,
      placeholder,
      type,
      value,
      title,
      error,
      width,
      shouldHide,
      disabled,
      children,
      ...inputProps
    },
    ref
  ) => {
    // const shouldHide = inputProps.disabled;

    const containerStyle = {
      display: shouldHide ? 'none' : isTextArea ? 'flex' : 'block',
      'flex-direction': 'column',
      width: width,
    };

    const inputStyle = {
      ...(error ? { borderColor: '#e71e1e' } : {}),
      ...inputStyles,

    };

    return (
      <div className={classes.inputContainer} style={containerStyle}>
        {title && <h5 className={classes.inputTitle}>{title}</h5>}
        {children ? children : null}
        {mask ? (
          <InputMask
            ref={ref}
            type={type}
            placeholder={placeholder}
            {...inputProps}
            className={classes.input}
            style={inputStyle}
            disabled={disabled}
            // disabled={shouldHide}
            //@ts-ignore
            mask={mask}
          />
        ) : !isTextArea ? (
          <input
            ref={ref}
            type={type}
            placeholder={placeholder}
            disabled={disabled}
            {...inputProps}
            className={classes.input}
            style={inputStyle}
            // disabled={shouldHide}
          />
        ) : (
          <textarea
            ref={ref}
            rows={6}
            disabled={disabled}
            placeholder={placeholder}
            {...inputProps}
            className={classes.textarea}
            style={inputStyle}
          />
        )}
        <div className={classes.errorContainer}>
          {error && <p className={classes.inputError}>{error}</p>}
        </div>
      </div>
    );
  }
);

export default Input;
