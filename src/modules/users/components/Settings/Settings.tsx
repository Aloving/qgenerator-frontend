import React from 'react';
import { Typography } from '@material-ui/core';

import { Role } from '../../enums';

interface SettingsProps {
  role: Role;
  login: string;
}

export const Settings: React.FC<SettingsProps> = ({ login, role }) => {
  return (
    <div>
      <Typography color="primary">Login: {login}</Typography>
      <Typography color="primary">Role: {role}</Typography>
    </div>
  );
};
