import React from 'react';

import { IconButton, TableCell, TableRow } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import DoneIcon from '@material-ui/icons/Done';
import CancelIcon from '@material-ui/icons/Cancel';

import { IQuestion } from '../../../question';
import { IUser, Role } from '../../../users';
import { IProposal } from '../../../proposals';

interface QuestionRowProps {
  id: IQuestion['id'];
  isLoading: boolean;
  proposalId?: IProposal['id'];
  text: string;
}

export const QuestionRow: React.FC<QuestionRowProps> = ({
  id,
  isLoading,
  proposalId,
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
        {isLoading ? <Skeleton width={80} height={24} /> : proposalId}
      </TableCell>
      <TableCell align="center">
        <>
          <IconButton disabled={isLoading}>
            <CancelIcon color="primary" />
          </IconButton>
        </>
      </TableCell>
    </TableRow>
  );
};
