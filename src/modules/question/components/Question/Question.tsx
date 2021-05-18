import React from 'react';
import { Typography } from '@material-ui/core';
import { FormattedMessage } from 'react-intl';

import { Button } from '../../../common/components';
import { QuestionHeader } from '../QuestionHeader';

import { questionTranslations } from '../../translations';

import styles from './Question.module.css';
import { Skeleton } from '@material-ui/lab';

export interface IQuestionProps {
  id: number;
  text: string;
  dislikes: number;
  likes: number;
  liked: boolean;
  disliked: boolean;
  isLoading: boolean;
  illustration?: string | React.ReactElement;

  onLike: () => void;
  onDislike: () => void;
}

export const Question: React.FC<IQuestionProps> = ({
  id,
  text,
  illustration,
  isLoading,
  ...props
}) => {
  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <QuestionHeader isLoading={isLoading} count={id} {...props} />
      </div>
      <div className={styles.content}>
        <div className={styles.text}>
          {isLoading ? (
            <>
              <Skeleton width={601} height={54} />
              <Skeleton width={427} height={54} />
            </>
          ) : (
            <Typography variant="h3" color="textPrimary">
              {text}
            </Typography>
          )}
        </div>
        <div className={styles.image}>
          {isLoading ? (
            <Skeleton variant="circle" width={210} height={210} />
          ) : React.isValidElement(illustration) ? (
            illustration
          ) : (
            <div>{illustration}</div>
          )}
        </div>
      </div>
      <div className={styles.actions}>
        <div className={styles.answerAction}>
          <Button disabled={isLoading}>
            <Typography>
              <FormattedMessage {...questionTranslations.answerIt} />
            </Typography>
          </Button>
        </div>
        <Button variant="outlined" disabled={isLoading}>
          <FormattedMessage {...questionTranslations.oneMoreAnswer} />
        </Button>
      </div>
    </div>
  );
};
