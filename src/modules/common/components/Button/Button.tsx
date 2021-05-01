import React from 'react';
import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
} from '@material-ui/core';

import styles from './Button.module.css';

export interface ButtonProps
  extends Pick<MuiButtonProps, 'disabled' | 'children'> {
  variant: 'outlined' | 'contained';
  color: 'primary' | 'secondary';
}

export const Button: React.FC<ButtonProps> = (props) => {
  return (
    <MuiButton
      classes={{ outlined: styles.outlined, root: styles.button }}
      {...props}
    />
  );
};

Button.defaultProps = {
  color: 'primary',
  variant: 'contained',
};
