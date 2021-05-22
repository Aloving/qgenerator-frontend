import React, { useContext } from 'react';
import { connect } from 'react-redux';
import { noop } from 'lodash';

import { IStoreState } from '../../../../store';
import { questionActions } from '../../ducks';
import { Question } from '../../components/Question';
import { ReactComponent as IllustrationSvg } from '../../../../stories/assets/illustration.svg';
import { SkeletonContext } from '../../../common/components/SkeletonContext';

interface IQuestionContainerProps {
  requestQuestion: () => void;
}

const questionPropsExample = {
  id: 1,
  text: 'Чем заняться?',
  dislikes: 12,
  likes: 15000,
  liked: true,
  disliked: false,
  illustration: <IllustrationSvg />,
};

export const QuestionContainerPure: React.FC<IQuestionContainerProps> = ({
  requestQuestion,
}) => {
  const { isLoading } = useContext(SkeletonContext);

  return (
    <Question
      {...questionPropsExample}
      isLoading={isLoading}
      requestQuestion={requestQuestion}
      onLike={noop}
      onDislike={noop}
    />
  );
};

const mapStateProps = (state: IStoreState) => ({});

const mapDispatchToProps = {
  requestQuestion: questionActions.fetchQuestionRequest,
};

export const QuestionContainer = connect(
  mapStateProps,
  mapDispatchToProps,
)(QuestionContainerPure);
