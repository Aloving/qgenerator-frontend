import { createMuiTheme } from '@material-ui/core';

import { commonTheme } from './commonTheme';

export const secondaryTheme = createMuiTheme({
  ...commonTheme,
  palette: {
    primary: {
      main: '#0057FF',
    },
    secondary: {
      main: '#E71D36',
    },
    warning: {
      main: '#FF9F1C',
    },
    text: {
      primary: '#0D0E13',
    },
  },
});
