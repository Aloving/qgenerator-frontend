import React from 'react';

import { BackgroundWrapper } from '../../../common/components';
import { SignInForm } from '../SignInForm';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface RegistrationPageProps {}

export const RegistrationPage: React.FC<RegistrationPageProps> = (props) => {
  return (
    <BackgroundWrapper>
      <SignInForm />
    </BackgroundWrapper>
  );
};
