import React, { useMemo } from 'react';

import { ReactComponent as MainLogo } from './qgenarator_main.svg';
import { ReactComponent as SecondaryLogo } from './qgenarator_secondary.svg';

export interface ILogoProps {
  isMainLogo: boolean;
}

export const Logo: React.FC<ILogoProps> = ({ isMainLogo }) => {
  const Logo = useMemo(() => (isMainLogo ? MainLogo : SecondaryLogo), [
    isMainLogo,
  ]);

  return (
    <div>
      <Logo />
    </div>
  );
};
