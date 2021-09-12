import React from 'react';
import {
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@material-ui/core';
import DoneIcon from '@material-ui/icons/Done';

import { IProposalWithUserData } from '../../interfaces';

interface ProposalsProps {
  proposals: IProposalWithUserData[];
}

export const Proposals: React.FC<ProposalsProps> = ({ proposals }) => {
  return (
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
        {proposals.map((row) => (
          <TableRow key={row.id}>
            <TableCell component="th" scope="row">
              {row.id}
            </TableCell>
            <TableCell>{row.text}</TableCell>
            <TableCell>{row.login}</TableCell>
            <TableCell align="right">{row.role}</TableCell>
            <TableCell align="center">
              <IconButton>
                <DoneIcon color="primary" />
              </IconButton>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
