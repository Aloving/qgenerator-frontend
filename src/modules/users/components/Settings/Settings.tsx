import React from 'react';

import { AdminPanel } from '../AdminPanel';

import { Role } from '../../enums';

import styles from './Settings.module.css';

interface SettingsProps {
  role: Role;
}

export const Settings: React.FC<SettingsProps> = ({ role }) => {
  const isAdmin = role === Role.Admin;

  return (
    <div className={styles.informationWrapper}>
      <div className={styles.informationContainer}>
        {isAdmin && <AdminPanel />}
      </div>
    </div>
  );
};
