import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import {
  createMuiTheme,
  makeStyles,
  createStyles,
  Theme as AugmentedTheme,
  ThemeProvider,
} from '@material-ui/core/styles';

import { store } from '../../../store';
import { Routes } from '../routes';

import './index.css';
import './App.css';

const history = createBrowserHistory();
const theme = createMuiTheme({
  props: {
    MuiButtonBase: {
      disableRipple: true,
    },
  },
  palette: {
    primary: {
      main: '#E71D36',
    },
    secondary: {
      main: '#0057FF',
    },
    warning: {
      main: '#FF9F1C',
    },
  },
});

export const App = () => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <ThemeProvider theme={theme}>
          <Routes />
        </ThemeProvider>
      </Router>
    </Provider>
  );
};
