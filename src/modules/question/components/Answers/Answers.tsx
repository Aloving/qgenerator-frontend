import React from 'react';

import { Answer } from '../Answer';

import { IAnswer } from '../../interfaces/IAnswer';

import { makeEmptyAnswer } from '../../helpers';
import styles from './Answers.module.css';

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
