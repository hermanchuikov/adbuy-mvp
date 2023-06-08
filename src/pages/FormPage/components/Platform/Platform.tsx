import React, { FC } from 'react';
import { CustomSelect, Input, Button, CheckBox } from '../../../../ui';
import { useForm } from 'react-hook-form';
import googleImage from '../../../../assets/images/platform-1.svg';
import facebookImage from '../../../../assets/images/platform-2.svg';
import instagramImage from '../../../../assets/images/platform-3.svg';
import tiktokImage from '../../../../assets/images/platform-4.svg';
import classes from './Platform.module.css';

const platformList = [
  { name: 'google', image: googleImage, isActive: false },
  { name: 'facebook', image: facebookImage, isActive: false },
  { name: 'instagram', image: instagramImage, isActive: false },
  { name: 'tiktok', image: tiktokImage, isActive: false },
];

interface IPlatformProps {
  handleSubmitButton: any;
}

const Platform: FC<IPlatformProps> = ({ handleSubmitButton }) => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({defaultValues: {
    google: false,
    facebook: false,
    instagram: false,
    tiktok: false,
  }});

  return (
    <div className={classes.platform}>
      <div className={classes.container}>
        <h2 className={classes.title}>Select platforms</h2>
        <div className={classes.platformInner}>
          <form onSubmit={handleSubmit(handleSubmitButton)}>
            <div className={classes.platformBlock}>
              {platformList.map((platform) => {
                return (
                  <CheckBox
                    control={control}
                    name={platform.name}
                    key={platform.name}
                    isChecked={platform.isActive}
                  >
                    <img src={platform.image} style={{ cursor: 'pointer' }} />
                  </CheckBox>
                  // <div
                  //   className={
                  //     platform.isActive
                  //       ? classes.platformActiveItem
                  //       : classes.platformItem
                  //   }
                  //   key={platform.name}
                  //   onClick={(event) => handlePlatform(event, platform)}
                  // >
                  //   <img className={classes.platformImage} src={platform.image} />
                  // </div>
                );
              })}
            </div>

            <Button
              title="Next page"
              style={{
                width: '900px',
                height: '80px',
                'background-color': '#33d684',
                'font-size': '24px',
              }}
            />
          </form>
          {/* <div className={classes.errorContainer}>
            {error && <p className={classes.errorMessage}>{error}</p>}
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Platform;
