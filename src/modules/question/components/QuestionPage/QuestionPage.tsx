import React from 'react';

import { Question } from '../Question';

import { ReactComponent as IllustrationSvg } from '../../../../stories/assets/illustration.svg';
import { Header, BackgroundWrapper } from '../../../common/components';

import styles from './QuestionPage.module.css';

const props = {
  id: 1,
  text: 'Чем заняться?',
  dislikes: 12,
  likes: 15000,
  liked: true,
  disliked: false,
  illustration: <IllustrationSvg />,
};

export const QuestionPage: React.FC = () => {
  return (
    <BackgroundWrapper className={styles.root}>
      <Header />

      <div className={styles.question}>
        {/* eslint-disable-next-line @typescript-eslint/no-empty-function */}
        <Question {...props} onDislike={() => {}} onLike={() => {}} />
      </div>
    </BackgroundWrapper>
  );
};
