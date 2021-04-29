import React from 'react';
import { Button as MuiButton, ButtonProps } from '@material-ui/core';

import styles from './Button.module.css';

export const Button: React.FC<ButtonProps> = (props) => {
  return (
    <MuiButton
      classes={{ outlined: styles.outlined, root: styles.button }}
      {...props}
    />
  );
};
