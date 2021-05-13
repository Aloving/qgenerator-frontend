import React from 'react';

import { QuestionCounter } from '../QuestionCounter';

import styles from './QuestionHeader.module.css';
import { Likes } from '../../../common/components';

interface IQuestionHeaderProps {
  count: number;
  dislikes: number;
  likes: number;
  disliked: boolean;
  liked: boolean;
  illustration?: string | React.ElementType;

  onLike: () => void;
  onDislike: () => void;
}

export const QuestionHeader: React.FC<IQuestionHeaderProps> = ({
  count,
  ...props
}) => {
  return (
    <div className={styles.root}>
      <QuestionCounter count={count} />
      <Likes {...props} />
    </div>
  );
};
