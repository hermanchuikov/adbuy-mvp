import { FC } from 'react';
import { Input } from '../../ui';
import { Link } from 'react-router-dom';
import classes from './SignInPage.module.css';
import AdbuyLogo from '../../assets/images/NewestAdbuyLogo.svg';
import GoogleLogo from '../../assets/images/icons8-google.svg';

const SignInPage: FC = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <div className={classes.auth}>
          <Link to="/" className={classes.logoButton}>
            <img src={AdbuyLogo} className={classes.logo} />
          </Link>
          <div className={classes.authBlock}>
            <h2 className={classes.authTitle}>Login</h2>
            {/*<h4 className={classes.authSubtitle}>Boost your sales</h4>*/}

            <button className={classes.googleButton}>
              Login with Google
              <img className={classes.googleButtonLogo} src={GoogleLogo} />
            </button>

            <div className={classes.dividerLine}>
              <p className={classes.dividerText}><b>OR</b></p>
            </div>

            <form className={classes.form}>
              <Input inputStyles={{ width: '100%'}} placeholder={"Email"}/>
              <Input inputStyles={{ width: '100%' }} placeholder={"Password"}/>
            </form>

            <a className={classes.authForgotPassword}><b>Forgot password?</b></a>
          </div>
          <button className={classes.submitButton} type="submit">
            Login
          </button>
          <p className={classes.authRedirectText}>
            <b>Don't have an account?</b>{' '}
            <Link className={classes.authRedirectLink} to="/signUp">
              <b>Sign up</b>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
