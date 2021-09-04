import React from 'react';
import { UserData, UserDataProps } from '../UserData';

type AdminPanelProps = UserDataProps;

export const AdminPanel: React.FC<AdminPanelProps> = (props) => {
  return (
    <div>
      <UserData {...props} />
    </div>
  );
};
