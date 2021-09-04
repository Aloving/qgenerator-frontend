import React from 'react';
import { Grid, IconButton } from '@material-ui/core';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@material-ui/core';
import DoneIcon from '@material-ui/icons/Done';

import { CreateQuestionContainer } from '../../containers';
import { UserData, UserDataProps } from '../UserData';
import { Role } from '../../enums';

import styles from './AdminPanel.module.css';

type AdminPanelProps = UserDataProps;

const testRows = [
  {
    id: 1,
    text: 'Тестовый нейм',
    authorLogin: 'Anonymus',
    authorRole: Role.Admin,
  },
  {
    id: 2,
    text: 'Тестовый нейм',
    authorLogin: 'Anonymus',
    authorRole: Role.Admin,
  },
];

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
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Question Text</TableCell>
                <TableCell>Author</TableCell>
                <TableCell align="right">Author role</TableCell>
                <TableCell align="center" />
              </TableRow>
            </TableHead>
            <TableBody>
              {testRows.map((row) => (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell>{row.text}</TableCell>
                  <TableCell>{row.authorLogin}</TableCell>
                  <TableCell align="right">{row.authorRole}</TableCell>
                  <TableCell align="center">
                    <IconButton>
                      <DoneIcon color="primary" />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <div className={styles.addQuestion}>
            <CreateQuestionContainer />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};
