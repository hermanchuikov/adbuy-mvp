import React, { FC, forwardRef } from 'react';
import classes from './ImagePicker.module.css';

interface IImagePickerProps {
  name?: string;
  value?: string;
  title?: string;
  error?: string;
  ref?: any;
  isSelected?: boolean;
  image?: any;
}

const ImagePicker: FC<IImagePickerProps> = forwardRef(
  ({ value, name, title, error, image, isSelected, ...inputProps  }, ref) => {

    if (image) {
      return (
        <div className={classes.imageBlock}>
          <img src={image} className={classes.fileImage}/>
        </div>
      )
    }

    return (
      <div className={classes.fileBlock}>
        <input
          ref={ref}
          name={name}
          className={classes.fileInput}
          {...inputProps}
          type="file"

        />
        {/* <label className={classes.label} htmlFor={name}> */}
          <label className={classes.label}>{isSelected ? "Image is download" : "Choose image"}</label>
        {/* </label> */}
      </div>
    );
  }
);

export default ImagePicker;
