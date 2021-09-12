import React from 'react';

import { useStores } from '../../../common/containers';
import { SkeletonContext } from '../../../common/components';
import { QuestionPage } from '../../components';

export const QuestionPageContainer: React.FC = () => {
  const { questionStore } = useStores();

  return (
    <SkeletonContext.Provider value={{ isLoading: questionStore.isLoading }}>
      <QuestionPage />
    </SkeletonContext.Provider>
  );
};
