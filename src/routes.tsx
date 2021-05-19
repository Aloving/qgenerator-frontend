import React from 'react';
import { Route, Switch } from 'react-router';

import { QuestionRoutes } from './modules/question';

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        MAINPAGE
      </Route>
      <QuestionRoutes />
    </Switch>
  );
};
