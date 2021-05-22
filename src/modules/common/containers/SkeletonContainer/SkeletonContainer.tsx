import React from 'react';
import { connect } from 'react-redux';

import { SkeletonContext } from '../../components';
import { selectIsQuestionLoading } from '../../../question';
import { IStoreState } from '../../../../store';

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

export const SkeletonContainer = connect((state: IStoreState) => ({
  isLoading: selectIsQuestionLoading(state),
}))(SkeletonContainerPure);
