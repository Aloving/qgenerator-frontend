import React from 'react';
import {
  Card,
  CardContent,
  Divider,
  makeStyles,
  Typography,
} from '@material-ui/core';
import classNames from 'classnames';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: 'transparent',
    borderColor: '#fff',
  },
  borderless: {
    border: '0',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  divider: {
    backgroundColor: theme.palette.common.white,
  },
  title: {
    fontSize: 24,
  },
  pos: {
    marginBottom: 12,
  },
}));

interface IToolWrapperProps {
  title: React.ReactElement;
  borderless?: boolean;
}

export const ToolWrapper: React.FC<IToolWrapperProps> = ({
  children,
  title,
  borderless,
}) => {
  const classes = useStyles();

  return (
    <Card
      className={classNames(classes.root, { [classes.borderless]: borderless })}
      variant="outlined"
      color="secondary"
      elevation={3}
    >
      <CardContent>
        <Typography className={classes.title} gutterBottom component="h2">
          {title}
        </Typography>
        <Divider variant="fullWidth" className={classes.divider} />
        {children}
      </CardContent>
    </Card>
  );
};
