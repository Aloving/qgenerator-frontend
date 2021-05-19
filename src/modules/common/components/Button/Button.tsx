import React from 'react';
import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
  makeStyles,
  fade,
} from '@material-ui/core';

import styles from './Button.module.css';

export interface ButtonProps
  extends Pick<
    MuiButtonProps,
    'disabled' | 'children' | 'onClick' | 'className'
  > {
  variant?: 'outlined' | 'contained';
  color?: 'primary' | 'secondary';
}

const useStyles = makeStyles((theme) => ({
  disabledButton: {
    '&:not(.MuiButton-outlined)': {
      color: theme.palette.common.white,
      background: `${fade('#CBCBCB', 0.35)} !important`,
    },
    '&.MuiButton-outlined': {
      color: `${fade('#CBCBCB', 0.35)} !important`,
      borderColor: `${fade('#CBCBCB', 0.35)} !important`,
    },
  },
}));

export const Button: React.FC<ButtonProps> = (props) => {
  const classes = useStyles();

  return (
    <MuiButton
      classes={{
        outlined: styles.outlined,
        root: styles.button,
        disabled: classes.disabledButton,
      }}
      size="large"
      {...props}
    />
  );
};

Button.defaultProps = {
  color: 'primary',
  variant: 'contained',
};
