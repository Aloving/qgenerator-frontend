import React, { createRef, PropsWithChildren, useCallback } from 'react';
import { Formik } from 'formik';

import { Button } from '../../../common/components';

import styles from './DataFields.module.css';
import {
  Card,
  CardContent,
  Divider,
  makeStyles,
  Typography,
} from '@material-ui/core';
import { FormikProps } from 'formik/dist/types';
import { DataFieldStatus } from './components/DataFieldStatus';

// eslint-disable-next-line @typescript-eslint/ban-types
type DataFieldsProps = PropsWithChildren<{
  title: React.ReactElement;
}>;

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 480,
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

export const DataFields = <T,>({ children, title }: DataFieldsProps) => {
  const classes = useStyles();
  const formRef: React.Ref<FormikProps<T>> = createRef();
  const handleSubmit = useCallback(() => {
    formRef?.current?.setStatus(null);
  }, [formRef]);

  return (
    <Formik<T>
      onSubmit={handleSubmit}
      initialValues={{} as T}
      innerRef={formRef}
      enableReinitialize
    >
      {({ handleSubmit, status }) => (
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
            <div>
              {React.Children.map(children, (child) => {
                return <div className={styles.field}>{child}</div>;
              })}
            </div>
            {status === DataFieldStatus.Edit && (
              <Button onClick={() => handleSubmit()}>Save</Button>
            )}
          </CardContent>
        </Card>
      )}
    </Formik>
  );
};
