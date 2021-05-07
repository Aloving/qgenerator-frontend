import React from 'react';
import { Route, Switch } from 'react-router';

import { QuestionRoutes } from '../question';
import { Button } from './components/Button';

export const Routes = () => {
  const a = () => 1 + 2;

  return (
    <Switch>
      <Route exact path="/">
        <div>
          <Button onClick={a} variant="contained" color="primary" size="large">
            Отправить
          </Button>
          <Button onClick={a} variant="contained" color="secondary">
            Отправить4в
          </Button>
        </div>
        <div>
          <Button onClick={a} variant="outlined" color="primary">
            Отправить
          </Button>
          <Button onClick={a} variant="outlined" color="secondary">
            Отправить
          </Button>
        </div>
      </Route>
      <QuestionRoutes />
    </Switch>
  );
};
