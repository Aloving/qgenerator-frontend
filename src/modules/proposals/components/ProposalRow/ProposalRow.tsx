import React from 'react';
import { IconButton, TableCell, TableRow } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import DoneIcon from '@material-ui/icons/Done';

import { Role } from '../../../users';
import { ProposalStatus } from '../../enums';

interface ProposalRowProps {
  id: string;
  text: string;
  login: string;
  role: Role;
  status: ProposalStatus;
  isLoading: boolean;

  onAccept: () => void;
}

export const ProposalRow: React.FC<ProposalRowProps> = ({
  id,
  isLoading,
  login,
  onAccept,
  role,
  status,
  text,
}) => {
  return (
    <TableRow>
      <TableCell component="th" scope="row">
        {isLoading ? <Skeleton width={80} height={24} /> : id}
      </TableCell>
      <TableCell>
        {isLoading ? <Skeleton width={80} height={24} /> : text}
      </TableCell>
      <TableCell>
        {isLoading ? <Skeleton width={80} height={24} /> : login}
      </TableCell>
      <TableCell>
        {isLoading ? <Skeleton width={80} height={24} /> : role}
      </TableCell>
      <TableCell>
        {isLoading ? <Skeleton width={80} height={24} /> : status}
      </TableCell>
      <TableCell align="center">
        {status !== ProposalStatus.Accepted && (
          <>
            <IconButton disabled={isLoading} onClick={onAccept}>
              <DoneIcon color="primary" />
            </IconButton>
          </>
        )}
      </TableCell>
    </TableRow>
  );
};
