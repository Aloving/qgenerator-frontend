import React from 'react';

import { AdminPanel } from '../../components/AdminPanel';
import { useStores } from '../../../common/containers';

import { Role } from '../../enums';

export const AdminPanelContainer: React.FC = () => {
  const { userStore } = useStores();

  return (
    <AdminPanel
      role={userStore.user?.role || Role.User}
      login={userStore.user?.login || ''}
      email={userStore.user?.email || ''}
      answerCount={userStore.user?.answers?.length || 0}
      questionsCount={userStore.user?.questions?.length || 0}
    />
  );
};
