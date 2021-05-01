import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { Story } from '@storybook/react';

import { mainTheme } from '../modules/common/styles';

export const decorators = [
  (Story: Story) => (
    <ThemeProvider theme={mainTheme}>
      <Story />
    </ThemeProvider>
  ),
];
