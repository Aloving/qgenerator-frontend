import React from 'react';

import { Answer } from '../Answer';

import { IAnswer } from '../../interfaces/IAnswer';

import styles from './Answers.module.css';
import { makeEmptyAnswer } from '../../helpers';

interface IAnswersProps {
  answers: IAnswer[];
  isLoading: boolean;
}

export const Answers: React.FC<IAnswersProps> = ({ answers, isLoading }) => {
  const answersToRender = isLoading
    ? [makeEmptyAnswer(), makeEmptyAnswer()]
    : answers;

  return (
    <>
      {answersToRender.map((answer) => (
        <div className={styles.item}>
          <Answer isLoading={isLoading} {...answer} />
        </div>
      ))}
    </>
  );
};
