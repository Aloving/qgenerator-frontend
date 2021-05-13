import React from 'react';
import { Typography } from '@material-ui/core';
import { FormattedMessage } from 'react-intl';

import { Button } from '../../../common/components';
import { QuestionHeader } from '../QuestionHeader';

import { questionTranslations } from '../../translations';

import styles from './Question.module.css';

export interface IQuestionProps {
  id: number;
  text: string;
  dislikes: number;
  likes: number;
  liked: boolean;
  disliked: boolean;
  illustration?: string | React.ReactElement;

  onLike: () => void;
  onDislike: () => void;
}

export const Question: React.FC<IQuestionProps> = ({
  id,
  text,
  illustration,
  ...props
}) => {
  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <QuestionHeader count={id} {...props} />
      </div>
      <div className={styles.content}>
        <div className={styles.text}>
          <Typography variant="h3" color="textPrimary">
            {text}
          </Typography>
        </div>
        <div className={styles.image}>
          {React.isValidElement(illustration) ? (
            illustration
          ) : (
            <div>{illustration}</div>
          )}
        </div>
      </div>
      <div className={styles.actions}>
        <div className={styles.answerAction}>
          <Button>
            <Typography>
              <FormattedMessage {...questionTranslations.answerIt} />
            </Typography>
          </Button>
        </div>
        <Button variant="outlined">
          <FormattedMessage {...questionTranslations.oneMoreAnswer} />
        </Button>
      </div>
    </div>
  );
};
