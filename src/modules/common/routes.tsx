import React from 'react';
import { Route, Switch } from 'react-router';

import { Question, QuestionRoutes } from '../question';
import { useTheme } from './styles';
import { Button } from './components';
import {
  LangSwitcherContainer,
  ThemeSwitcherContainer,
  LogoContainer,
} from './containers';
import { ReactComponent as IllustrationSvg } from '../../stories/assets/illustration.svg';

const props = {
  id: 1,
  text: 'Чем заняться?',
  dislikes: 12,
  likes: 15000,
  liked: true,
  disliked: false,
  illustration: <IllustrationSvg />,
};

export const Routes = () => {
  const { switchTheme, theme } = useTheme();

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
          <LangSwitcherContainer />
          <LogoContainer />
          <div
            style={{
              background: theme.palette.primary.dark,
            }}
          >
            {/* eslint-disable-next-line @typescript-eslint/no-empty-function */}
            <Question {...props} onDislike={() => {}} onLike={() => {}} />
          </div>
        </div>
      </Route>
      <QuestionRoutes />
    </Switch>
  );
};
