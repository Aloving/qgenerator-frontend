import { useEffect } from 'react';
import { useStores } from '../containers';

export function useAppPreLoadings() {
  const { userStore, authenticationStore } = useStores();

  useEffect(() => {
    if (
      !userStore.user &&
      !userStore.async?.isFailed &&
      !userStore.async?.isLoading &&
      !userStore.async?.isSucceed
    ) {
      authenticationStore.loadUserByToken();
    }
  }, [userStore.user]);
}
