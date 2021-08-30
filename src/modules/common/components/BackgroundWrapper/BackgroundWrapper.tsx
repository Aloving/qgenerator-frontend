import React from 'react';
import classNames from 'classnames';

import { useTheme } from '../../styles';

import styles from './BackgroundWrapper.module.css';

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
      className={classNames(styles.root, className)}
    >
      {children}
    </div>
  );
};
