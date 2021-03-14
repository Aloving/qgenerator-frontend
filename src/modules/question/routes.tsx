import React from 'react';
import { Route } from 'react-router-dom';

import { Question } from './Question';
import { IQuestion } from './interfaces';

const questionExample: IQuestion = {
  id: 10,
  likes: 300,
  dislikes: 112,
  commentariesCount: 40,
  author: {
    id: 'at_1',
    avatar: '',
    name: 'test author',
  },
  questionText: 'Что такое бутылка?',
};

export const QuestionRoutes = () => {
  return (
    <>
      <Route path="/q/:id">
        <Question {...questionExample} />
      </Route>
    </>
  );
};
