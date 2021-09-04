import React from 'react';
import { observer } from 'mobx-react-lite';

import { useStores } from '../../../common/containers';
import { CreateQuestion } from '../../components';

export const CreateQuestionContainerPure: React.FC = () => {
  const { userStore } = useStores();

  return (
    <CreateQuestion
      onCreate={() => void 0}
      authorId={userStore.user?.id || ''}
    />
  );
};

export const CreateQuestionContainer = observer(CreateQuestionContainerPure);
