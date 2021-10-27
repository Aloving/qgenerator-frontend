import React, { useCallback } from 'react';

import { useStores } from '../../../common/containers';
import { AnswerForm } from '../../components';
import { IAnswerForm } from '../../interfaces';

export const AnswersFormContainer = () => {
  const { answersStore } = useStores();
  const handleSubmit = useCallback(
    ({ answer }: IAnswerForm) => {
      answersStore.addAnswer({
        text: answer,
        questionId: answersStore.currentQuestionId,
      });
    },
    [answersStore.currentQuestionId],
  );

  return <AnswerForm onSubmit={handleSubmit} />;
};
