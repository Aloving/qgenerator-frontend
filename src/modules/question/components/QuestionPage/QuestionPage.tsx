import React from 'react';

import { QuestionContainer } from '../../containers';

import { Header, BackgroundWrapper } from '../../../common/components';

import styles from './QuestionPage.module.css';

export const QuestionPage: React.FC = () => {
  return (
    <BackgroundWrapper className={styles.root}>
      <Header />

      <div className={styles.question}>
        <QuestionContainer />
      </div>
    </BackgroundWrapper>
  );
};
