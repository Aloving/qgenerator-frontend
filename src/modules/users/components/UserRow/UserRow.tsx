import React from 'react';
import { TableCell, TableRow } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';

import { IUser } from '../../interfaces';

interface UserRowProps extends Pick<IUser, 'id' | 'login' | 'role' | 'email'> {
  answersCount: number;
  isLoading: boolean;
  proposalsCount: number;
  questionCount: number;
}

export const UserRow: React.FC<UserRowProps> = ({
  id,
  answersCount,
  email,
  isLoading,
  login,
  proposalsCount,
  questionCount,
  role,
}) => {
  return (
    <TableRow>
      <TableCell component="th" scope="row">
        {isLoading ? <Skeleton width={80} height={24} /> : id}
      </TableCell>
      <TableCell>
        {isLoading ? <Skeleton width={80} height={24} /> : login}
      </TableCell>
      <TableCell>
        {isLoading ? <Skeleton width={80} height={24} /> : email}
      </TableCell>
      <TableCell>
        {isLoading ? <Skeleton width={80} height={24} /> : role}
      </TableCell>
      <TableCell>
        {isLoading ? <Skeleton width={80} height={24} /> : answersCount}
      </TableCell>
      <TableCell>
        {isLoading ? <Skeleton width={80} height={24} /> : proposalsCount}
      </TableCell>
      <TableCell>
        {isLoading ? <Skeleton width={80} height={24} /> : questionCount}
      </TableCell>
    </TableRow>
  );
};
