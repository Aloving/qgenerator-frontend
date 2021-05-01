import { createMuiTheme } from '@material-ui/core';

export const commonTheme = createMuiTheme({
  props: {
    MuiButtonBase: {
      disableRipple: true,
    },
  },
});
