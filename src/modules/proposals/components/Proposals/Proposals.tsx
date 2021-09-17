import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@material-ui/core';

import { ProposalRow } from '../ProposalRow';

import { IProposal, IProposalWithUserData } from '../../interfaces';

interface ProposalsProps {
  proposals: IProposalWithUserData[];
  isLoading: boolean;

  acceptProposal: (proposalId: IProposal['id']) => void;
}

export const Proposals: React.FC<ProposalsProps> = ({
  acceptProposal,
  proposals,
  isLoading,
}) => {
  return (
    <Table size="small">
      <TableHead>
        <TableRow>
          <TableCell>ID</TableCell>
          <TableCell>Question Text</TableCell>
          <TableCell>Author</TableCell>
          <TableCell>Author role</TableCell>
          <TableCell>Status</TableCell>
          <TableCell align="center" />
        </TableRow>
      </TableHead>
      <TableBody>
        {proposals.map((row) => (
          <ProposalRow
            key={row.id}
            {...row}
            isLoading={isLoading}
            onAccept={() => acceptProposal(row.id)}
          />
        ))}
      </TableBody>
    </Table>
  );
};
