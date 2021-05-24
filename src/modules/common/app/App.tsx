import React from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import { Routes } from '../../../routes';
import { StoreProvider, SkeletonContainer } from '../containers';
import { ThemeProvider } from '../styles';
import { IntlProvider } from '../translations';

import './index.css';
import './App.css';

const history = createBrowserHistory();

export const App = () => {
  return (
    <StoreProvider>
      <IntlProvider>
        <Router history={history}>
          <SkeletonContainer>
            <ThemeProvider>
              <Routes />
            </ThemeProvider>
          </SkeletonContainer>
        </Router>
      </IntlProvider>
    </StoreProvider>
  );
};
