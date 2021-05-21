import React from 'react';

import { SkeletonContext } from '../../components';
import { connect } from 'react-redux';

interface ISkeletonProviderPureProps {
  isLoading: boolean;
}

const SkeletonContainerPure: React.FC<ISkeletonProviderPureProps> = ({
  isLoading,
  children,
}) => {
  return (
    <SkeletonContext.Provider value={{ isLoading }}>
      {children}
    </SkeletonContext.Provider>
  );
};

export const SkeletonContainer = connect(() => ({
  isLoading: false,
}))(SkeletonContainerPure);
