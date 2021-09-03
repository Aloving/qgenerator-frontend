import React from 'react';

import { OnePageLayout } from '../../../common/components';
import { LoginFormContainer } from '../../containers';

export const LoginPage: React.FC = () => {
  return (
    <OnePageLayout>
      <LoginFormContainer />
    </OnePageLayout>
  );
};
