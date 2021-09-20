import React from 'react';
import { Box, Grid } from '@material-ui/core';

import { QuestionsContainer } from '../../../questions/containers';
import { ProposalsContainer } from '../../../proposals/containers';
import { UserDataContainer } from '../../../user/containers';
import { UsersTableContainer } from '../../containers';

import styles from './AdminPanel.module.css';

export const AdminPanel: React.FC = () => {
  return (
    <div>
      <Grid container justify="space-between" alignItems="stretch" spacing={3}>
        <Grid item xs={4}>
          <div className={styles.userDataWrapper}>
            <UserDataContainer />
          </div>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Box marginBottom="3rem">
            <ProposalsContainer />
          </Box>
          <Box marginBottom="3rem">
            <QuestionsContainer />
          </Box>
          <UsersTableContainer />
        </Grid>
      </Grid>
    </div>
  );
};
