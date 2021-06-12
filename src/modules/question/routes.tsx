import React from 'react';
import { Route } from 'react-router-dom';

import { QuestionPage } from './components/QuestionPage';
import { certainQuestionUrl } from '../common/utils';

export const QuestionRoutes = () => {
  return (
    <>
      <Route path={certainQuestionUrl}>
        <QuestionPage />
      </Route>
    </>
  );
};
