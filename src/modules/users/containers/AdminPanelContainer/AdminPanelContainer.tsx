import React from 'react';
import { observer } from 'mobx-react-lite';

import { AdminPanel } from '../../components';
import { useStores } from '../../../common/containers';

import { Role } from '../../enums';

export const AdminPanelContainerPure: React.FC = () => {
  const { userStore, questionProposalsStore } = useStores();

  return (
    <AdminPanel
      role={userStore.user?.role || Role.User}
      login={userStore.user?.login || ''}
      email={userStore.user?.email || ''}
      answerCount={userStore.user?.answers?.length || 0}
      questionsCount={userStore.user?.questions?.length || 0}
      questionProposalsCount={questionProposalsStore.proposals.length || 0}
    />
  );
};

export const AdminPanelContainer = observer(AdminPanelContainerPure);
