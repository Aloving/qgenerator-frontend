import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import { ThemeProvider } from '@material-ui/core/styles';

import { store } from '../../../store';
import { mainTheme } from '../styles';
import { Routes } from '../routes';

import './index.css';
import './App.css';

const history = createBrowserHistory();

export const App = () => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <ThemeProvider theme={mainTheme}>
          <Routes />
        </ThemeProvider>
      </Router>
    </Provider>
  );
};
