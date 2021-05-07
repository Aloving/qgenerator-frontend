import React from 'react';
import { Typography } from '@material-ui/core';
import { FormattedMessage } from 'react-intl';

import { questionTranslations } from '../../translations';

import styles from './QuestionCounter.module.css';

export interface IQuestionNumProps {
  count: number;
}

export const QuestionCounter: React.FC<IQuestionNumProps> = ({ count }) => {
  return (
    <Typography variant="h2" className={styles.root}>
      <Typography variant="caption" className={styles.item} color="textPrimary">
        <FormattedMessage {...questionTranslations.question} />
      </Typography>
      <Typography variant="caption" className={styles.item} color="textPrimary">
        {'#'}
      </Typography>
      <Typography variant="caption" className={styles.item} color="primary">
        {count}
      </Typography>
    </Typography>
  );
};
