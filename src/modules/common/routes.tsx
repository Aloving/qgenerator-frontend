import React from 'react';
import { Route, Switch } from 'react-router';

import { QuestionRoutes } from '../question';

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        index page
      </Route>
      <QuestionRoutes />
    </Switch>
  );
};
