import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';

import { store } from '../../../store';
import { ThemeProvider } from '../styles';
import { Routes } from '../routes';
import { IntlProvider } from '../translations';

import './index.css';
import './App.css';

const history = createBrowserHistory();

export const App = () => {
  return (
    <Provider store={store}>
      <IntlProvider>
        <Router history={history}>
          <ThemeProvider>
            <Routes />
          </ThemeProvider>
        </Router>
      </IntlProvider>
    </Provider>
  );
};
