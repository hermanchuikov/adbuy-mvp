import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Header, Footer } from '../components';
import classes from './Layout.module.css'

const Layout: FC = () => {
  return (
    <div className={classes.layout}>
      <Header />
      <Outlet/>
      <Footer />
    </div>
  );
};

export default Layout;
