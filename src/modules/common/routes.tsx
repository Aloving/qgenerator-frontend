import React from 'react';
import { Button } from '@material-ui/core';
import { Route, Switch } from 'react-router';

import { QuestionRoutes } from '../question';
import { Button as MyButton } from './components/Button';

export const Routes = () => {
  const a = () => 1 + 2;

  return (
    <Switch>
      <Route exact path="/">
        <div>
          <MyButton
            onClick={a}
            variant="contained"
            color="primary"
            size="large"
          >
            Отправить
          </MyButton>
          <MyButton
            onClick={a}
            variant="contained"
            color="secondary"
            size="large"
          >
            Отправить
          </MyButton>
        </div>
        <div>
          <MyButton onClick={a} variant="outlined" color="primary" size="large">
            Отправить
          </MyButton>
          <MyButton
            onClick={a}
            variant="outlined"
            color="secondary"
            size="large"
          >
            Отправить
          </MyButton>
        </div>
      </Route>
      <QuestionRoutes />
    </Switch>
  );
};
