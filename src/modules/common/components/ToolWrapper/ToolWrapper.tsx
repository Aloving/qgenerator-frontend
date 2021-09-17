import React from 'react';
import {
  Card,
  CardContent,
  Divider,
  makeStyles,
  Typography,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: 'transparent',
    borderColor: '#fff',
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

export const ToolWrapper: React.FC<{ title: React.ReactElement }> = ({
  children,
  title,
}) => {
  const classes = useStyles();

  return (
    <Card
      className={classes.root}
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
