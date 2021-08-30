import React from 'react';
import { Route, Switch } from 'react-router';

import { QuestionPage } from './modules/question';
import { certainQuestionUrl, registrationUrl } from './modules/common/utils';
import { RegistrationPage } from './modules/registration/components';

export const Routes = () => {
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
    </Switch>
  );
};
