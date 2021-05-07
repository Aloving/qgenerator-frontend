import React from 'react';
import { Route, Switch } from 'react-router';

import { QuestionRoutes } from '../question';
import { Button } from './components/Button';
import { useTheme } from './styles';
import { ThemeSwitcherContainer } from './containers';

export const Routes = () => {
  const { switchTheme } = useTheme();

  return (
    <Switch>
      <Route exact path="/">
        <div>
          <Button onClick={switchTheme} variant="contained" color="primary">
            Отправить
          </Button>
          <Button onClick={switchTheme} variant="contained" color="secondary">
            Отправить4в
          </Button>
          <ThemeSwitcherContainer />
        </div>
      </Route>
      <QuestionRoutes />
    </Switch>
  );
};
