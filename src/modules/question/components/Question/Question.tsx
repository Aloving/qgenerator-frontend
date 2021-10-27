import React, { useState } from 'react';
import { Typography } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import { FormattedMessage } from 'react-intl';

import { QuestionHeader } from '../QuestionHeader';
import { Button } from '../../../common/components';
import {
  AnswersContainer,
  AnswersFormContainer,
} from '../../../answers/containers';

import {
  questionTranslations,
  commonTranslations,
} from '../../../../translations';
import styles from './Question.module.css';

export interface IQuestionProps {
  id: number;
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
  const [isAnswerActive, setIsAnswerActive] = useState(false);

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
            <Button
              disabled={isLoading}
              onClick={() => setIsAnswerActive(true)}
            >
              <Typography>
                <FormattedMessage {...commonTranslations.answerIt} />
              </Typography>
            </Button>
          </div>
          <Button
            variant="outlined"
            disabled={isLoading}
            onClick={requestQuestion}
          >
            <FormattedMessage {...questionTranslations.oneMoreAnswer} />
          </Button>
        </div>
        {isAnswerActive && (
          <div className={styles.answerForm}>
            <AnswersFormContainer />
          </div>
        )}
      </div>
      <AnswersContainer />
    </div>
  );
};
