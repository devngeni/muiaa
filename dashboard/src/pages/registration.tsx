import DefaultLayout from '@/components/layouts/defaultLayout';
import { RegistrationSection } from '@/components/registration.page';
import React from 'react';

const Registration = () => {
  return (
    <DefaultLayout pageTitle="Sign Up">
      <RegistrationSection />
    </DefaultLayout>
  );
};

export default Registration;
