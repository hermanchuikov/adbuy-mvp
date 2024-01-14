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
    onClick?: () => void;
    isCustomMode?: boolean;
    disabled?: boolean;
}

const ImagePicker: FC<IImagePickerProps> = forwardRef(
    ({ value, name, title, error, image, isSelected, isCustomMode, disabled, ...inputProps   }, ref) => {

        if (isCustomMode) {
            return null;
        }

        if (image) {
            return (
                <div className={classes.imageBlock}>
                    <img src={image} className={classes.fileImage} />
                </div>
            );
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
                <label className={classes.label}>{isSelected ? "Image is download" : "Choose Image"}</label>
            </div>
        );
    }
);

export default ImagePicker;
