import React from 'react';
import { Typography } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import { FormattedMessage } from 'react-intl';
import { subDays } from 'date-fns';

import { Button } from '../../../common/components';
import { QuestionHeader } from '../QuestionHeader';
import { AnswerSection } from '../AnswerSection';

import { questionTranslations } from '../../../../translations';

import { IAnswer } from '../../interfaces/IAnswer';

import styles from './Question.module.css';

export interface IQuestionProps {
  id: number;
  answers: IAnswer[];
  text: string;
  dislikes: number;
  likes: number;
  liked: boolean;
  disliked: boolean;
  isLoading: boolean;
  illustration?: string | React.ReactElement;

  requestQuestion: () => void;
  onLike: () => void;
  onDislike: () => void;
}

export const Question: React.FC<IQuestionProps> = ({
  id,
  answers,
  text,
  illustration,
  isLoading,
  liked,
  likes,
  disliked,
  dislikes,
  requestQuestion,
  onDislike,
  onLike,
  ...props
}) => {
  return (
    <div className={styles.root}>
      <div className={styles.questionRoot}>
        <div className={styles.header}>
          <QuestionHeader
            isLoading={isLoading}
            count={id}
            disliked={disliked}
            dislikes={dislikes}
            onDislike={onDislike}
            onLike={onLike}
            liked={liked}
            likes={likes}
            {...props}
          />
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
          </div>w
          <Button
            variant="outlined"
            disabled={isLoading}
            onClick={requestQuestion}
          >
            <FormattedMessage {...questionTranslations.oneMoreAnswer} />
          </Button>
        </div>
      </div>
      <AnswerSection answers={answers} isLoading={isLoading} />
    </div>
  );
};
