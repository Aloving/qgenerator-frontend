import React from 'react';
import { IconButton, TableCell, TableRow } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';

import { IQuestion } from '../../../question/interfaces';
import { IProposal } from '../../../proposals/interfaces';
import CancelIcon from '@material-ui/icons/Cancel';

interface QuestionRowProps {
  id: IQuestion['id'];
  isLoading: boolean;
  proposalId?: IProposal['id'];
  text: string;

  onDelete: () => void;
}

export const QuestionRow: React.FC<QuestionRowProps> = ({
  id,
  isLoading,
  proposalId,
  text,
  onDelete,
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
      <TableCell>
        {isLoading ? (
          <Skeleton width={80} height={24} />
        ) : (
          <IconButton disabled={isLoading} onClick={onDelete}>
            <CancelIcon color="primary" />
          </IconButton>
        )}
      </TableCell>
    </TableRow>
  );
};
