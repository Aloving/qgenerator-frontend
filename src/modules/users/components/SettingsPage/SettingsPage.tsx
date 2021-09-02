import React from 'react';
import { BackgroundWrapper, Header } from '../../../common/components';
import { SettingsPageContainer } from '../../containers';

export const SettingsPage: React.FC = () => {
  return (
    <BackgroundWrapper onePage>
      <Header />
      <SettingsPageContainer />
    </BackgroundWrapper>
  );
};
