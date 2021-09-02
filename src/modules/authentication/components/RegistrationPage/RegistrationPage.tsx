import React from 'react';

import { CentredForm } from '../CenteredForm';
import { SignInFormContainer } from '../../containers';

export const RegistrationPage: React.FC = () => {
  return (
    <CentredForm>
      <SignInFormContainer />
    </CentredForm>
  );
};
