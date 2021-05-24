import React, { useCallback, useContext, useMemo } from 'react';
import { observer } from 'mobx-react-lite';

import { SkeletonContext } from '../../../common/components';
import { Question } from '../../components/Question';

import { ReactComponent as IllustrationSvg } from '../../../../stories/assets/illustration.svg';
import { useStores } from '../../../common/containers/StoreProvider/useStores';

const questionPropsExample = {
  id: 1,
  text: 'Чем заняться?',
  dislikes: 12,
  likes: 15000,
  liked: true,
  disliked: false,
  illustration: <IllustrationSvg />,
};

export const QuestionContainerPure: React.FC = () => {
  const { isLoading } = useContext(SkeletonContext);
  const { questionStore } = useStores();
  console.log(questionStore.questionData);
  const data = useMemo(
    () => questionStore.questionData || questionPropsExample,
    [questionStore.questionData, questionPropsExample],
  );
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
