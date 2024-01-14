import { FC } from 'react';
import AdbuyLogo from '../../assets/images/NewestAdbuyLogo.svg';
import GoogleLogo from '../../assets/images/icons8-google.svg';
import { Input } from '../../ui';
import { Link } from 'react-router-dom';
import classes from './SignUpPage.module.css';

const SignUpPage: FC = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <div className={classes.auth}>
          <Link to="/" className={classes.logoButton}>
            <img src={AdbuyLogo} className={classes.logo} />
          </Link>
          <div className={classes.authBlock}>
            <h2 className={classes.authTitle}>Sign up</h2>
            <h4 className={classes.authSubtitle}>Get 7-day free trial</h4>

            <button className={classes.googleButton}>
              Sign up with Google
              <img className={classes.googleButtonLogo} src={GoogleLogo} />
            </button>

            <div className={classes.dividerLine}>
              <p className={classes.dividerText}>or</p>
            </div>

            <form className={classes.form}>
              <Input inputStyles={{ width: '100%' }} title="Full name" />
              <Input inputStyles={{ width: '100%' }} title="Email" />
              <Input inputStyles={{ width: '100%' }} title="Password" />
            </form>

            <p className={classes.authAgreement}>
              By signing up you agree to our{' '}
              <Link to="/privacy">privacy policy</Link> and{' '}
              <Link to="/refund">refund policy</Link>.
            </p>
          </div>
          <button className={classes.submitButton} type="submit">
            Sign up & Get 7-day Free Trial
          </button>
          <p className={classes.authRedirectText}>
            Do you have an account?{' '}
            <Link className={classes.authRedirectLink} to="/signIn">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
