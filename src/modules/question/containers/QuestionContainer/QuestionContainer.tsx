import React, { useCallback, useContext, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { useParams } from 'react-router';

import { SkeletonContext } from '../../../common/components';
import { Question } from '../../components';
import { useStores } from '../../../common/containers/StoreProvider/useStores';
import { IRouterParams } from '../../../common/interfaces';

export const QuestionContainerPure: React.FC = () => {
  const { isLoading } = useContext(SkeletonContext);
  const { questionStore } = useStores();
  const isCompleted = questionStore.completed;
  const { questionId } = useParams<IRouterParams>();
  const data = questionStore.data;
  const disliked = questionStore.isDisliked;
  const liked = questionStore.isLiked;
  const handleQuestionDislike = useCallback(
    () => questionStore.dislikeQuestion(),
    [questionStore],
  );
  const handleRequestQuestion = useCallback(() => {
    questionStore.randomizeQuestion();
  }, [questionStore.requestQuestion]);

  useEffect(() => {
    questionId &&
      !isCompleted &&
      !isLoading &&
      questionStore.requestQuestion(+questionId);
  }, []);

  return (
    <Question
      {...data}
      liked={liked}
      disliked={disliked}
      isLoading={isLoading}
      requestQuestion={handleRequestQuestion}
      onLike={questionStore.likeQuestion}
      onDislike={handleQuestionDislike}
    />
  );
};

export const QuestionContainer = observer(QuestionContainerPure);
