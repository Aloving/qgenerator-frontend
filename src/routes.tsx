import React from 'react';
import { Route, Switch } from 'react-router';

import { QuestionPage } from './modules/question';
import {
  certainQuestionUrl,
  registrationUrl,
  loginUrl,
  settingsUrl,
} from './modules/common/utils';
import { LoginPage, RegistrationPage } from './modules/authentication';
import { SettingsPage } from './modules/users/components';
import { PrivateRoute } from './modules/common/containers';
import { useAppPreLoadings } from './modules/common/hooks';

export const Routes = () => {
  useAppPreLoadings();

  return (
    <Switch>
      <Route exact path="/">
        MAINPAGE
      </Route>
      <Route path={certainQuestionUrl} exact>
        <QuestionPage />
      </Route>
      <Route path={registrationUrl} exact>
        <RegistrationPage />
      </Route>
      <Route path={loginUrl} exact>
        <LoginPage />
      </Route>
      <PrivateRoute path={settingsUrl} exact>
        <SettingsPage />
      </PrivateRoute>
    </Switch>
  );
};
