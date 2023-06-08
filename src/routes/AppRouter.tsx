import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from '../layout/Layout';
import {
  WelcomePage,
  FormPage,
  AdPage,
  PlatformPage,
  PaymentPage,
  CongratsPage,
} from '../pages';

const AppRouter: FC = () => {
  return (
    <Routes>
      <Route index element={<WelcomePage />} />
      <Route path="/" element={<Layout />}>
        <Route path="platforms" element={<PlatformPage />} />
        <Route path="form" element={<FormPage />} />
        <Route path="ad" element={<AdPage />} />
        <Route path="payment" element={<PaymentPage />} />
        <Route path="congratulations" element={<CongratsPage />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
