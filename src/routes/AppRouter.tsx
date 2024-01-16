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
  SignInPage,
  SignUpPage,
} from '../pages';

import ModePickerPage from '../pages/ModePickerPage/ModePickerPage';

import PrivacyPage from '../pages/PrivacyPage/PrivacyPage';
import RefundPage from '../pages/RefundPage/RefundPage';

const AppRouter: FC = () => {
  return (
    <Routes>
      <Route index element={<WelcomePage />} />
      <Route path="/" element={<Layout />}>
        <Route path="platforms" element={<PlatformPage />} />
        <Route path="mode" element={<ModePickerPage />} />
        <Route path="form" element={<FormPage />} />
        <Route path="ad" element={<AdPage />} />
        <Route path="payment" element={<PaymentPage />} />
        <Route path="done" element={<CongratsPage />} />
        <Route path="privacy" element={<PrivacyPage />} />
        <Route path="refund" element={<RefundPage />} />
      </Route>
      <Route path="login" element={<SignInPage />} />
      <Route path="signUp" element={<SignUpPage />} />
    </Routes>
  );
};

export default AppRouter;
