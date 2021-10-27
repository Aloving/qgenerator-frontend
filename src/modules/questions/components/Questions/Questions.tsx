import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@material-ui/core';

import { QuestionRow } from '../QuestionRow';

import { IQuestion } from '../../../question/interfaces';

interface QuestionsProps {
  questions: IQuestion[];
  isLoading: boolean;

  onDelete: (id: IQuestion['id']) => void;
}

export const Questions: React.FC<QuestionsProps> = ({
  questions,
  isLoading,

  onDelete,
}) => {
  return (
    <Table size="small">
      <TableHead>
        <TableRow>
          <TableCell>ID</TableCell>
          <TableCell>Question Text</TableCell>
          <TableCell>Proposal ID</TableCell>
          <TableCell></TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {questions.map((row) => (
          <QuestionRow
            key={row.id}
            {...row}
            isLoading={isLoading}
            id={row.id}
            text={row.text}
            proposalId={row.proposalId}
            onDelete={() => onDelete(row.id)}
          />
        ))}
      </TableBody>
    </Table>
  );
};
