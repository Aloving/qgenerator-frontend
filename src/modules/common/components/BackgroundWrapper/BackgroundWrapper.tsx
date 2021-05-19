import React from 'react';

import { useTheme } from '../../styles';

interface BackgroundWrapperProps {
  className?: string;
}

export const BackgroundWrapper: React.FC<BackgroundWrapperProps> = ({
  className,
  children,
}) => {
  const { theme } = useTheme();

  return (
    <div
      style={{
        background: theme.palette.common.black,
      }}
      className={className}
    >
      {children}
    </div>
  );
};
