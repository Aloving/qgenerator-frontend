import React from 'react';
import { Grid } from '@material-ui/core';

import { CreateQuestionContainer } from '../../containers';
import { UserData, UserDataProps } from '../UserData';

import styles from './AdminPanel.module.css';
import { ProposalsContainer } from '../../../proposals/containers';

type AdminPanelProps = UserDataProps;

export const AdminPanel: React.FC<AdminPanelProps> = (props) => {
  return (
    <div className={styles.root}>
      <Grid container justify="space-between" alignItems="stretch" spacing={3}>
        <Grid item xs={4}>
          <div>
            <UserData {...props} />
          </div>
        </Grid>
        <Grid item xs={8}>
          <ProposalsContainer />
          <div className={styles.addQuestion}>
            <CreateQuestionContainer />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};
