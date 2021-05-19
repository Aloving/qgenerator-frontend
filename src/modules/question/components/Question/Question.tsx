import React from 'react';
import { Typography } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import { FormattedMessage } from 'react-intl';

import { Button } from '../../../common/components';
import { QuestionHeader } from '../QuestionHeader';

import { questionTranslations } from '../../../../translations';

import styles from './Question.module.css';
import { AnswerSection } from '../AnswerSection/AnswerSection';

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
  liked,
  likes,
  disliked,
  dislikes,
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
          </div>
          <Button variant="outlined" disabled={isLoading}>
            <FormattedMessage {...questionTranslations.oneMoreAnswer} />
          </Button>
        </div>
      </div>
      <AnswerSection
        answers={[
          {
            id: 1,
            likes: 5123,
            dislikes: 10,
            disliked: false,
            liked: true,
            avatar: 'https://source.unsplash.com/48x48/?people',
            authorName: 'Алешка Попович',
            time: '10 sec назад',
            text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda beatae error est illo quidem, voluptas? Accusamus aspernatur atque deserunt dolores ex harum id laboriosam perspiciatis, praesentium quasi quis rerum voluptates.`,
          },
          {
            id: 2,
            likes: 5123,
            dislikes: 10,
            disliked: false,
            liked: true,
            avatar: 'https://source.unsplash.com/48x48/?people',
            authorName: 'Алешка Попович',
            time: '10 sec назад',
            text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda beatae error est illo quidem, voluptas? Accusamus aspernatur atque deserunt dolores ex harum id laboriosam perspiciatis, praesentium quasi quis rerum voluptates.`,
          },
        ]}
        isLoading={isLoading}
      />
    </div>
  );
};
