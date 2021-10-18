import React from 'react';
import { observer } from 'mobx-react-lite';

import { useStores } from '../../../common/containers';
import { AnswerSection } from '../../components';

export const AnswersContainer: React.FC = observer(() => {
  const { answersStore } = useStores();

  return (
    <AnswerSection
      answers={answersStore.answers}
      isLoading={answersStore.loading.isLoading}
    />
  );
});
