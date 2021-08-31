import React from 'react';

import { BackgroundWrapper, Header } from '../../../common/components';
import { SignInForm } from '../SignInForm';

import styles from './RegistrationPage.module.css';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface RegistrationPageProps {}

export const RegistrationPage: React.FC<RegistrationPageProps> = (props) => {
  return (
    <BackgroundWrapper onePage className={styles.root}>
      <div className={styles.header}>
        <Header />
      </div>
      <SignInForm />
    </BackgroundWrapper>
  );
};
