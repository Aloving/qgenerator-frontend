import React from 'react';
import { IntlProvider as ReactIntlProvider } from 'react-intl';

import { DEFAULT_LANGUAGE } from '../../../constants/env';

// we expect that russian will be only language for now so DEFAULT_LANGUAGE is `ru`
export const IntlProvider: React.FC = ({ children }) => {
  return (
    <ReactIntlProvider locale={DEFAULT_LANGUAGE}>{children}</ReactIntlProvider>
  );
};
