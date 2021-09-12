import React from 'react';
import { observer } from 'mobx-react-lite';

import { SkeletonContext } from '../../components';
import { useStores } from '../StoreProvider';

const SkeletonContainerPure: React.FC = ({ children }) => {
  const stores = useStores();
  const isLoading = true;
  console.log(stores);

  return (
    <SkeletonContext.Provider value={{ isLoading }}>
      {children}
    </SkeletonContext.Provider>
  );
};

export const SkeletonContainer = observer(SkeletonContainerPure);
