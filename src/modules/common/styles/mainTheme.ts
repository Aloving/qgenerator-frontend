import { createMuiTheme } from '@material-ui/core';

import { commonTheme } from './commonTheme';

export const mainTheme = createMuiTheme({
  ...commonTheme,
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
    text: {
      primary: '#FDFFFC',
    },
    action: {
      active: '#FDFFFC',
    },
  },
});
