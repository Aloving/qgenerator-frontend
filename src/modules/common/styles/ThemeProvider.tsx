import React, { createContext } from 'react';
import { noop } from 'lodash';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';

import { useThemeActions } from './useThemeActions';
import { mainTheme } from './mainTheme';

export const ThemeInteractions = createContext({
  theme: mainTheme,
  isMainTheme: true,
  setMainTheme: noop,
  setSecondaryTheme: noop,
  switchTheme: noop,
});

export const ThemeProvider: React.FC = ({ children }) => {
  const themeInteractions = useThemeActions();

  return (
    <ThemeInteractions.Provider value={themeInteractions}>
      <ThemeInteractions.Consumer>
        {({ theme }) => (
          <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
        )}
      </ThemeInteractions.Consumer>
    </ThemeInteractions.Provider>
  );
};
