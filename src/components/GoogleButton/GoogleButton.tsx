import { FC } from 'react';
import GoogleLogo from '../../assets/images/icons8-google.svg'
import classes from './GoogleButton.module.css'

interface IGoogleButtonProps {}

const GoogleButton: FC<IGoogleButtonProps> = (props) => {
  const {} = props;

  return <button className={classes.button}>
    <img className={classes.image} src={GoogleLogo}/>
    <p className={classes.text}>Continue with Google</p>
  </button>;
};

export default GoogleButton;
