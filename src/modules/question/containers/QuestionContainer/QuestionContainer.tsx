import React, { useCallback, useContext, useEffect, useMemo } from 'react';
import { observer } from 'mobx-react-lite';

import { SkeletonContext } from '../../../common/components';
import { Question } from '../../components/Question';
import { useStores } from '../../../common/containers/StoreProvider/useStores';

export const QuestionContainerPure: React.FC = () => {
  const { isLoading } = useContext(SkeletonContext);
  const { questionStore } = useStores();
  const data = useMemo(() => questionStore.questionDataStore.data, [
    questionStore.questionDataStore.data,
  ]);
  const disliked = useMemo(() => questionStore.isDisliked, [
    questionStore.isDisliked,
  ]);
  const liked = useMemo(() => questionStore.isLiked, [questionStore.isLiked]);
  const handleQuestionLike = useCallback(() => questionStore.likeQuestion(), [
    data,
  ]);
  const handleQuestionDislike = useCallback(
    () => questionStore.dislikeQuestion(),
    [questionStore],
  );
  const handleRequestQuestion = useCallback(
    () => questionStore.requestQuestion(),
    [questionStore.requestQuestion],
  );

  useEffect(() => {
    questionStore.requestQuestion();
  }, []);

  return (
    <Question
      {...data}
      liked={liked}
      disliked={disliked}
      isLoading={isLoading}
      requestQuestion={handleRequestQuestion}
      onLike={handleQuestionLike}
      onDislike={handleQuestionDislike}
    />
  );
};

export const QuestionContainer = observer(QuestionContainerPure);
