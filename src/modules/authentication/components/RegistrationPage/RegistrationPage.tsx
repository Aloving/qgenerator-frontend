import React from 'react';

import { BackgroundWrapper, Header } from '../../../common/components';
import { SignInFormContainer } from '../../containers';

import styles from './RegistrationPage.module.css';

export const RegistrationPage: React.FC = () => {
  return (
    <BackgroundWrapper onePage className={styles.root}>
      <div className={styles.header}>
        <Header />
      </div>
      <SignInFormContainer />
    </BackgroundWrapper>
  );
};
