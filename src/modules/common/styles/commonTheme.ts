import { createMuiTheme } from '@material-ui/core';

export const commonTheme = createMuiTheme({
  typography: {
    fontSize: 16,
  },
  props: {
    MuiButtonBase: {
      disableRipple: true,
    },
  },
});
