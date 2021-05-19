import React, { useContext } from 'react';

import { Question } from '../Question';

import { ReactComponent as IllustrationSvg } from '../../../../stories/assets/illustration.svg';
import {
  Header,
  BackgroundWrapper,
  SkeletonContext,
} from '../../../common/components';

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
  const { isLoading } = useContext(SkeletonContext);

  return (
    <BackgroundWrapper className={styles.root}>
      <Header />

      <div className={styles.question}>
        <Question
          {...props}
          // eslint-disable-next-line @typescript-eslint/no-empty-function
          onDislike={() => {}}
          // eslint-disable-next-line @typescript-eslint/no-empty-function
          onLike={() => {}}
          isLoading={isLoading}
        />
      </div>
    </BackgroundWrapper>
  );
};
