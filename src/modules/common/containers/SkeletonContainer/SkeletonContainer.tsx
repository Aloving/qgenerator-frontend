import React from 'react';
import { observer } from 'mobx-react-lite';

import { SkeletonContext } from '../../components';
import { useStores } from '../StoreProvider/useStores';

const SkeletonContainerPure: React.FC = ({ children }) => {
  const { questionStore } = useStores();
  const isLoading = questionStore.questionDataStore.isLoading;

  return (
    <SkeletonContext.Provider value={{ isLoading }}>
      {children}
    </SkeletonContext.Provider>
  );
};

export const SkeletonContainer = observer(SkeletonContainerPure);
