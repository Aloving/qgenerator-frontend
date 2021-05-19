import React from 'react';
import { Route } from 'react-router-dom';

import { QuestionPage } from './components/QuestionPage';

export const QuestionRoutes = () => {
  return (
    <>
      <Route path="/q/:questionId">
        <QuestionPage />
      </Route>
    </>
  );
};
