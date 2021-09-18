import React, { useEffect } from 'react';

import { CreateQuestion, Questions } from '../../components';
import { useStores } from '../../../common/containers';
import { observer } from 'mobx-react-lite';

export const QuestionsContainerPure: React.FC = () => {
  const { userStore, questionsStore } = useStores();

  useEffect(() => {
    if (!questionsStore.loading.status) {
      questionsStore.loadQuestions();
    }
  }, []);

  return (
    <div>
      <Questions
        questions={questionsStore.questions}
        isLoading={questionsStore.loading.isLoading}
      />

      <CreateQuestion
        onCreate={() => void 0}
        authorId={userStore.user?.id || ''}
      />
    </div>
  );
};

export const QuestionsContainer = observer(QuestionsContainerPure);
