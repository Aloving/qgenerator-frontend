import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';

import { store } from '../../../store';
import { Routes } from '../../../routes';
import { SkeletonContainer } from '../containers';
import { ThemeProvider } from '../styles';
import { IntlProvider } from '../translations';

import './index.css';
import './App.css';

const history = createBrowserHistory();

export const App = () => {
  return (
    <Provider store={store}>
      <IntlProvider>
        <Router history={history}>
          <SkeletonContainer>
            <ThemeProvider>
              <Routes />
            </ThemeProvider>
          </SkeletonContainer>
        </Router>
      </IntlProvider>
    </Provider>
  );
};
