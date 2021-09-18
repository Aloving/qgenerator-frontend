import React from 'react';
import { Grid } from '@material-ui/core';

import { QuestionsContainer } from '../../../questions/containers';
import { ProposalsContainer } from '../../../proposals/containers';
import { UserData, UserDataProps } from '../UserData';

import styles from './AdminPanel.module.css';

type AdminPanelProps = UserDataProps;

export const AdminPanel: React.FC<AdminPanelProps> = (props) => {
  return (
    <div>
      <Grid container justify="space-between" alignItems="stretch" spacing={3}>
        <Grid item xs={4}>
          <div className={styles.userDataWrapper}>
            <UserData {...props} />
          </div>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <ProposalsContainer />
          <div className={styles.questions}>
            <QuestionsContainer />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};
