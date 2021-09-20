import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';

import { useStores } from '../../../common/containers';
import { ToolWrapper } from '../../../common/components';
import { UsersTable } from '../../components';

export const UsersTableContainerPure: React.FC = () => {
  const { usersStore } = useStores();

  useEffect(() => {
    if (!usersStore.loading.status) {
      usersStore.loadUsers();
    }
  }, []);

  return (
    <ToolWrapper title={<div>Пользователи</div>}>
      <UsersTable
        users={usersStore.users}
        isLoading={usersStore.loading.isLoading}
        onRoleChange={usersStore.changeRole}
      />
    </ToolWrapper>
  );
};

export const UsersTableContainer = observer(UsersTableContainerPure);
