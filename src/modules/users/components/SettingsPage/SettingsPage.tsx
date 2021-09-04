import React from 'react';

import {
  BackgroundWrapper,
  Header,
  OutWrapper,
} from '../../../common/components';
import { SettingsPageContainer } from '../../containers';

export const SettingsPage: React.FC = () => {
  return (
    <BackgroundWrapper onePage>
      <Header />
      <OutWrapper>
        <SettingsPageContainer />
      </OutWrapper>
    </BackgroundWrapper>
  );
};
