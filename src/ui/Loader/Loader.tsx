import React, { FC, ReactNode } from 'react';
import classes from './Loader.module.css';

interface ILoaderProps {
  children?: ReactNode;
}

const Loader: FC<ILoaderProps> = ({children}) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.loader}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className={classes.loaderTextBlock}>
        {children}
      </div>
    </div>
  );
};

export default Loader;
