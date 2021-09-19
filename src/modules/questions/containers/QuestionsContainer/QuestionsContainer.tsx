import React, { useEffect } from 'react';
import { Box } from '@material-ui/core';
import { observer } from 'mobx-react-lite';

import { useStores } from '../../../common/containers';
import { ToolWrapper } from '../../../common/components';
import { CreateQuestion, Questions } from '../../components';

export const QuestionsContainerPure: React.FC = () => {
  const { userStore, questionsStore } = useStores();

  useEffect(() => {
    if (!questionsStore.loading.status) {
      questionsStore.loadQuestions();
    }
  }, []);

  return (
    <ToolWrapper title={<div>Вопросы</div>}>
      <Box marginBottom={8}>
        <Questions
          questions={questionsStore.questions}
          isLoading={questionsStore.loading.isLoading}
        />
      </Box>
      <CreateQuestion
        onCreate={() => void 0}
        authorId={userStore.user?.id || ''}
      />
    </ToolWrapper>
  );
};

export const QuestionsContainer = observer(QuestionsContainerPure);
