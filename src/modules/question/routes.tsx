import React from 'react';
import { Route } from 'react-router-dom';

import { IQuestion } from './interfaces';
import { QuestionPage } from './components/QuestionPage';

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
  answers: [],
};

export const QuestionRoutes = () => {
  return (
    <>
      <Route path="/q/:questionId">
        <QuestionPage />
      </Route>
    </>
  );
};
